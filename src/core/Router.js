import React from 'react'
import PropType from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import ChatList from 'pages/ChatList'
import Login from 'pages/Login'
import NewContact from 'pages/NewContact'
import Profile from 'pages/Profile'
import Home from 'pages/Home'
import Join from 'pages/Join'
import NotFound from 'pages/NotFound'

function Router(props) {
  const { isAuthenticated } = props

  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact component={() => <Home {...props} />} />
        <Route path="/chat" component={() => <ChatList {...props} />} />
        <Route
          path="/new-contact"
          component={() => <NewContact {...props} />}
        />
        <Route path="/profile" component={() => <Profile {...props} />} />
        <Route path="/*" component={() => <NotFound {...props} />} />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path="/" exact component={() => <Home {...props} />} />
      <Route path="/login" component={() => <Login {...props} />} />
      <Route path="/register" component={() => <Join {...props} />} />
      <Route path="/*" component={() => <NotFound {...props} />} />
    </Switch>
  )
}

Router.propTypes = {
  isAuthenticated: PropType.bool.isRequired,
}

export default Router
