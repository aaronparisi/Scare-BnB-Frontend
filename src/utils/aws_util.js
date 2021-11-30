import {
  S3Client,
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  DeleteObjectCommand
} from "@aws-sdk/client-s3";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

import S3FileUpload from 'react-s3'
import S3 from 'aws-s3'

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
  // console.log('call to emptyFolder')
}

export const createFolder = async (path) => {
  const props = {
    Bucket: "springfieldbnb",
    Key: path
  }

  try {
    const data = await s3.send(
      new PutObjectCommand(props)
    )

    return data
  } catch (error) {
    console.log(`error creating folder: ${error.message}`)
  }
  // console.log('call to createFolder')
  // return {}
}

export const deleteFolder = async (path) => {
  const props = {
    Bucket: "springfieldbnb",
    Key: path
  }

  try {
    const data = await s3.send(
      new DeleteObjectCommand(props)
    )
    
    return data
  } catch(error) {
    console.log(`error deleting folder: ${error.message}`)
  }
}

export const addObject = async (file, path) => {
  const props = {
    Bucket: "springfieldbnb",
    Key: path,
    Body: file
  }
  try {
    const data = await s3.send(
      new PutObjectCommand(props)
    )

    return data
  } catch (error) {
    console.log(`error adding object: ${error.message}`)
  }
  // console.log('call to addObject')
  // return {}
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
  // console.log('call to getPropertyImage')
  // return {}
}

export const getAllObjectKeysInFolder = async (folderPath) => {
  const props = {
    Bucket: "springfieldbnb",
    Prefix: folderPath
  }
  
  try {
    const data = await s3.send(
      new ListObjectsV2Command(props)
    )
    
    if (data.Contents !== undefined) {
      // for folders with more than 1 element in them,
      // the first key in data.Contents will be the folder itself??
      const slicer = (data.Contents.length > 1) ? 1 : 0
      return data.Contents.slice(slicer).map(obj => {
        return obj.Key
      })
    } else {
      return []
    }
  } catch (error) {
    console.log(`failed to get all objects in folder: ${error.message}`)
  }
  // console.log('call to getAllObjectKeysInFolder')
  // return []
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

export const uploadPhoto = ({ dirName, file, filename }) => {
  const config = {
    bucketName: 'springfieldbnb',
    dirName: dirName,
    region: 'us-west-2',
    // accessKeyId: accessKey,
    // secretAccessKey: secretKey
  }

  // return S3FileUpload.uploadFile(file, config)
  // .catch(err => {
  //   console.log(`error uploading new avatar`)
  // })
  // console.log('call to uploadPhoto')

  //S3FileUpload doesn't let me specify file name???
  const uploadClient = new S3(config)
  return uploadClient.uploadFile(file, filename)
  .catch(err => {
    // ???? why does the filename end up as "file.png.png"???
    console.log(`error uploading photo ${filename}`)
  })

}

export const deletePhoto = ({ user, dirName, event, toDelete }) => {
  const config = {
    bucketName: 'springfieldbnb',
    dirName: dirName,
    region: 'us-west-2',
  }

  return S3FileUpload.deleteFile(toDelete, config)
  .then(data => {
    // ? don't think I need anything else here?
    return data
  })
  .catch(err => {
    console.log(`error uploading new avatar`)
  })
  // console.log('call to deletePhoto')
}