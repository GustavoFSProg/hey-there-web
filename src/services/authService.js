import { loginApi, registerApi } from 'api/auth'

export const loginService = async info => {
  try {
    const { data } = await loginApi(info)
    return { data }
  } catch (error) {
    return error
  }
}

export const registerService = async info => {
  try {
    const { error } = await registerApi(info)
    if (error) return Promise.reject(error)

    const { data, error: loginError } = await loginService(info)
    if (loginError) return Promise.reject(loginError)

    return { data }
  } catch (error) {
    return error
  }
}
