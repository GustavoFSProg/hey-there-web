import axios from 'axios'
import { clearItems, getItem, keys } from 'helpers'

const isLocalhost = window.location.origin.includes('localhost')

const api = axios.create({
  baseURL: isLocalhost
    ? 'http://localhost:3001'
    : 'https://heythere-staging-api.herokuapp.com',
})

api.interceptors.request.use(
  config => {
    const token = getItem(keys.token)
    if (token) return { ...config, headers: { 'x-access-token': token } }
    return config
  },
  error => Promise.reject(error)
)

api.interceptors.response.use(
  config => config,
  error => {
    if (error.response === undefined) {
      const networkError = { error: JSON.parse(JSON.stringify(error)).message }
      return Promise.reject(networkError)
    }

    const { status, data } = error.response
    if (status === 400) return Promise.reject(data)
    if (status === 401) {
      clearItems()
      window.location = '/'
      return window.location.reload()
    }
    return Promise.reject(error)
  }
)

export default api
