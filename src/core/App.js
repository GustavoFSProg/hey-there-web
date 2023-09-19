import React, { useEffect } from 'react'
import { useStore } from 'core/store'
import Navbar from 'components/Navbar'
import Container from 'components/Container'
import Router from 'core/Router'
import { clearItems, getItem, keys } from 'helpers'
import api from 'api'

function App() {
  const { store, setStore } = useStore()

  async function verifyToken() {
    const token = getItem(keys.token)
    if (token) {
      const { data } = await api.post('/verifyToken', { token })
      if (!data?.isValidToken) {
        setStore(null)
        clearItems()
        window.location.reload()
      }
    }
  }

  useEffect(() => {
    verifyToken()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Navbar brand="Hey There" isAuthenticated={!!store.token} />
      <Container>
        <Router isAuthenticated={!!store.token} />
      </Container>
    </>
  )
}

export default App
