import React from 'react'
import PropTypes from 'prop-types'
import StyledRow from './styles'

function Row({ children, ...props }) {
  return <StyledRow {...props}>{children}</StyledRow>
}

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}

export default Row
