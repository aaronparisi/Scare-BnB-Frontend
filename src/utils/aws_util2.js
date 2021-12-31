import { axiosIns } from "../index"
import axios from 'axios'

// urls
export const getPresignedUrl = (awsMethod, filename) => {
  // given awsMethod ('get', 'put', etc) as a string,
  //       filename as a string
  // returns a presigned url

  // use axiosIns to call the backend method which fetches the url
  return axiosIns({
    method: 'get',
    url: `/api/presigned-url`,
    data: {
      awsMethod: awsMethod,
      filename: filename
    }
  })
  // todo examine the shape of what is returned... string?
}

export const getPresignedGet = filename => {
  return getPresignedUrl("get", filename)
}

export const getPresignedPut = filename => {
  return getPresignedUrl("put", filename)
}

export const getPresignedDelete = filename => {
  return getPresignedUrl("delete", filename)
}

// object manipulatios
export const getObject = filename => {
  const presignedUrl = getPresignedGet(filename)

  axios.get(presignedUrl)
}

export const putObject = (filename, toPut) => {
  const presignedUrl = getPresignedPut(filename)

  axios.post(
    presignedUrl,
    toPut,
    {
      headers: {
        'Content-Type': toPut.type
      }
    }
  )
  .then((rej, res) => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}

export const deleteObject = filename => {
  const presignedUrl = getPresignedDelete(filename)

  axios.delete(presignedUrl)
}

// bucket stuff
export const createBucker = bucket => {

}

export const emptyBucket = bucket => {

}

export const deleteBucket = bucket => {

}

export const listObjectsInFolder = folder => {

}

export const createFolder = folder => {

}

export const emptyFilder = folder => {

}

export const deleteFolder = folder => {

}