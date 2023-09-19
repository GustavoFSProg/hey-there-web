import React from 'react'
import PropTypes from 'prop-types'
import StyledTypography from './styles'

function Typography({ children, ...props }) {
  const { color, size, weight, lineHeight } = props

  return (
    <StyledTypography
      color={color}
      size={size}
      weight={weight}
      lineHeight={lineHeight}
    >
      {children}
    </StyledTypography>
  )
}

Typography.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  lineHeight: PropTypes.number,
}

Typography.defaultProps = {
  color: 'initial',
  size: 'md',
  weight: 'regular',
  lineHeight: 1.4,
}

export default Typography
