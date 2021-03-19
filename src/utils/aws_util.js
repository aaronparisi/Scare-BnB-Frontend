import {
  S3Client,
  GetObjectCommand,
  ListObjectsCommand,
  PutObjectCommand,
  DeleteObjectCommand
} from "@aws-sdk/client-s3";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
// import { get } from 'jquery';

const region = "us-west-2";

export const s3 = new S3Client({
  region,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region }),
    // Replace IDENTITY_POOL_ID with an appropriate Amazon Cognito Identity Pool ID for, such as 'us-east-1:xxxxxx-xxx-4103-9936-b52exxxxfd6'.
    identityPoolId: "us-west-2:2bfe0bd7-1c4e-46e6-b7b3-ff26289e46e0",
  }),
});

export const emptyFolder = async (path) => {
  const props = {
    Bucket: "springfieldbnb",
    Key: path
  }

  try {
    s3.send(
      new DeleteObjectCommand(props)
    )
  } catch (error) {
    console.log(`error deleting object: ${error.message}`)
  }
}

export const addObject = async (file, path) => {
  const props = {
    Bucket: "springfieldbnb",
    Key: path,
    Body: file
  }
  debugger
  try {
    const data = await s3.send(
      new PutObjectCommand(props)
    )

    debugger
    return data
  } catch (error) {
    console.log(`error adding object: ${error.message}`)
  }
}

export const getAvatarKey = async (folderPath) => {
  let avatarKeys = await getAllObjectKeysInFolder(folderPath)
  return avatarKeys[0]
}

export const getPropertyImage = async (pathToImage) => {
  const props = {
    Bucket: "springfieldbnb",
    Key: `${pathToImage}`
  }

  try {
    const data = await s3.send(
      new GetObjectCommand(props)
    )

    return data;
  } catch (error) {
    console.log(`failed to get property image: ${error.message}`)
  }
}

export const getAllObjectKeysInFolder = async (folderPath) => {
  const props = {
    Bucket: "springfieldbnb",
    Prefix: folderPath
  }

  try {
    const data = await s3.send(
      new ListObjectsCommand(props)
    )
    
    return data.Contents.slice(1).map(obj => {
      return obj.Key
    })
  } catch (error) {
    console.log(`failed to get all objects in folder: ${error.message}`)
  }
}

export const getImageUrlFromStream = (folderName) => {
  return getPropertyImage(folderName)  // ! this should be changed
  .then(response => {
    const reader = response.Body.getReader();

    return new ReadableStream({
      start(controller) {
        return pump();
        function pump() {
          return reader.read().then(({ done, value }) => {
            // When no more data needs to be consumed, close the stream
            if (done) {
                controller.close();
                return;
            }
            // Enqueue the next data chunk into our target stream
            controller.enqueue(value);
            return pump();
          });
        }
      }
    })
  })
  .then(stream => {
    return new Response(stream)
  })
  .then(response => {
    return response.blob()
  })
  .then(blob => {
    return URL.createObjectURL(blob)
  })
  .then(url => {
    return url;
  })  // return the url to be set as component state
  .catch(err => console.error(err));
}