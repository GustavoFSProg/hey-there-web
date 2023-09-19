import React from 'react'
import PropType from 'prop-types'
import { StyledImage } from './styles'

function Avatar({ src, size, border }) {
  return <StyledImage size={size} src={src} border={border} />
}

Avatar.propTypes = {
  src: PropType.string.isRequired,
  size: PropType.string,
  border: PropType.string,
}

Avatar.defaultProps = {
  size: undefined,
  border: undefined,
}

export default Avatar
