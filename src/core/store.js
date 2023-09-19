import React, { useState, createContext, useContext } from 'react'
import { getItem, keys } from 'helpers'
import PropTypes from 'prop-types'

const initialState = {
  isLoading: false,
  token: getItem(keys.token),
  // currentUser: getCurrentUser(),
  isSubmitting: false,
}

export const Context = createContext({})

const Provider = ({ children }) => {
  const [store, updateStore] = useState(initialState)
  const setStore = props => updateStore({ ...store, ...props })
  return (
    <Context.Provider value={{ store, setStore }}>{children}</Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
}

export const useStore = () => useContext(Context)

export default Provider
