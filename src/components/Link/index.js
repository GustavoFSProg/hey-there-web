import React from 'react'
import PropType from 'prop-types'
import StyledLink from './styles'

function Link({ children, to }) {
  return <StyledLink onClick={to}>{children}</StyledLink>
}

Link.propTypes = {
  children: PropType.oneOfType([PropType.node, PropType.array]).isRequired,
  to: PropType.func.isRequired,
}

export default Link
