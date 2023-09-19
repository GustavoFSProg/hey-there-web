import React from 'react'
import PropType from 'prop-types'
import GoogleLogin from 'react-google-login'
import Button from 'components/Button'

function GoogleButton({ responseGoogle, text }) {
  return (
    <GoogleLogin
      clientId={"320577280356-gug73g7h2hqcas8cseu30equu7m3sjoi.apps.googleusercontent.com"}
      render={renderProps => (
        <Button
          color="googleColor"
          type="submit"
          leftIcon="AiFillGoogleCircle"
          fullWidth
          style={{ margin: '1rem 0px' }}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          {text}
        </Button>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy="single_host_origin"
    />
  )
}

GoogleButton.propTypes = {
  responseGoogle: PropType.func.isRequired,
  text: PropType.string.isRequired,
}

export default GoogleButton
