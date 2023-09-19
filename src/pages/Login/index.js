import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Toast, { showToast } from 'components/Toast'
import Form from 'components/Form'
import { useStore } from 'core/store'
import { setItem, keys } from 'helpers'
import { loginService } from 'services/authService'

function Login() {
  const [fields, setFields] = useState({})
  const [loading, setLoading] = useState(false)
  const { setStore } = useStore()
  const { push } = useHistory()

  const handleFields = e => {
    const { name, value } = e.target
    setFields({ ...fields, [name]: value })
  }

  const handleLogin = async (params = fields) => {
    setLoading(true)

    const { data, error } = await loginService(params)

    setLoading(false)
    if (error) {
      typeof error === 'string'
        ? showToast({ type: 'error', message: error })
        : error.map(msg => showToast({ type: 'error', message: msg }))
      return null
    }

    setStore({ token: data.token })
    setItem(keys.token, data.token)
    setFields({ ...fields, password: '' })
    push('/chat')
    window.location.reload()
    return null
  }

  const responseGoogle = response => {
    const { googleId, email, imageUrl: avatar, name } = response.profileObj

    const password = `@HeyThere${googleId}`

    handleLogin({ password, email, avatar, name })
  }

  const onKeyDown = event => {
    const { keyCode } = event
    if (keyCode === 13) return handleLogin(event)
    return null
  }

  const renderComponents = [
    { type: 'input', name: 'Email' },
    { type: 'input', name: 'Password' },
    { type: 'button', name: 'Login', onClick: handleLogin },
    { type: 'googleButton', name: 'Login with Google', responseGoogle },
  ]

  return (
    <>
      <Form
        title="Welcome back"
        renderComponents={renderComponents}
        onKeyDown={onKeyDown}
        fields={fields}
        handleFields={handleFields}
        loading={loading}
      />
      <Toast />
    </>
  )
}

export default Login
