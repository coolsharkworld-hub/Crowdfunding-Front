// ** Axios Import
import axios from 'axios'

// ** Config Imports
import config from 'src/configs'

// ** Hooks Import
import { store } from 'src/store'

// ** Types Import
import { SignMsg, JSONData, User } from 'src/types'

const axiosInstance = axios.create({
  baseURL: config.apiUrl
})

export const uploadImage = async (formData: FormData): Promise<string> => {
  try {
    const response = await axiosInstance.post('/upload', formData)

    return response.data.filename
  } catch (error) {
    console.error('Upload Error:', error)
    throw error
  }
}

export const uploadJsonFile = async (jsonData: JSONData) => {
  try {
    const response = await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', {
      method: 'POST',
      headers: {
        pinata_api_key: config.pinata_api_key,
        pinata_secret_api_key: config.pinata_secret_key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    const result = await response.json()
    if (response.ok) {
      return result.IpfsHash
    } else {
      console.error('Error uploading JSON to Pinata:', result)
    }
  } catch (error) {
    console.error('Network error:', error)
  }
}

export const verifyWallet = async (signMsg: SignMsg) => {
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  try {
    const response = await axiosInstance.post('/user/verify', signMsg, axiosConfig)

    return response.data.uid
  } catch (error) {
    console.error('Upload Error:', error)
    throw error
  }
}

export const fetchAssets = async (page: number, limit: number, sort: string) => {
  try {
    const response = await axiosInstance.get('/asset/batch', {
      params: {
        page: page.toString(),
        limit: limit.toString(),
        sort
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.data.success) {
      return response.data
    } else {
      throw new Error('Failed to fetch assets')
    }
  } catch (error) {
    console.error('Error fetching assets:', error)
    throw error
  }
}

export const fetchDetail = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/asset/${id}`)

    if (response.data.success) {
      return response.data.asset
    } else {
      throw new Error('Failed to fetch assets')
    }
  } catch (error) {
    console.error('Error fetching assets:', error)
    throw error
  }
}

export const updateUser = async (wallet: string, user: Partial<User>) => {
  const uid = store.getState().auth.token
  try {
    const response = await axiosInstance.post(
      '/user/update',
      { wallet, user },
      {
        headers: {
          uid
        }
      }
    )

    return response.data
  } catch (error) {
    console.error('Error updating user:', error)
  }
}

export const fetchUser = async (wallet: string) => {
  try {
    const response = await axiosInstance.get(`/user/profile/${wallet}`)

    return response.data
  } catch (error) {
    console.error('Error updating user:', error)
  }
}
