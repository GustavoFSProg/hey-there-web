import React from 'react'
import PropTypes from 'prop-types'
import StyledLegend from './styles'

function Legend(props) {
  const { children, isRequired } = props
  return (
    <StyledLegend>
      {children}
      {isRequired ? '*' : ''}
    </StyledLegend>
  )
}

Legend.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  isRequired: PropTypes.bool,
}

Legend.defaultProps = {
  isRequired: false,
  children: '',
}

export default Legend
