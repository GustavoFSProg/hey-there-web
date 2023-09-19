import React, { useState } from 'react'
import Form from 'components/Form'
import { useHistory } from 'react-router-dom'
import { useStore } from 'core/store'
import { setItem, keys } from 'helpers'
import Toast, { showToast } from 'components/Toast'
import { registerService } from 'services/authService'

function Join() {
  const [fields, setFields] = useState({})
  const [loading, setLoading] = useState(false)
  const { setStore } = useStore()
  const { push } = useHistory()

  const handleFields = e => {
    const { name, value } = e.target
    setFields({ ...fields, [name]: value })
  }

  const handleJoin = async (params = fields) => {
    setLoading(true)
    const { data, error } = await registerService(params)
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

  const responseGoogle = async response => {
    const { googleId, email, imageUrl: avatar, name } = response.profileObj

    const password = `@HeyThere${googleId}`

    handleJoin({ password, email, avatar, name })
  }

  const onKeyDown = event => {
    const { keyCode } = event
    if (keyCode === 13) return handleJoin(event)
    return null
  } 

  const renderComponents = [
    { type: 'input', name: 'Name' },
    { type: 'input', name: 'Email' },
    { type: 'input', name: 'Password' },
    { type: 'button', name: 'Sign Up', onClick: handleJoin },
    { type: 'googleButton', name: 'Join with Google', responseGoogle },
  ]

  return (
    <>
      <Form
        title="Join Hey There"
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

export default Join
