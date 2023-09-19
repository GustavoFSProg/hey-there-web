import React from 'react'
import * as reactIcons from 'react-icons/ai'
import PropTypes from 'prop-types'
import StyledButton from './styles'

function Button(props) {
  const { children, onClick, loadingText, leftIcon, rightIcon, ...rest } = props

  const LeftIcon = reactIcons[leftIcon]
  const RightIcon = reactIcons[rightIcon]

  return (
    <StyledButton
      hasIcon={leftIcon || rightIcon}
      onClick={!(rest.isDisabled || rest.isLoading) ? onClick : undefined}
      {...rest}
    >
      {rest.isLoading ? (
        loadingText
      ) : (
        <div>
          {leftIcon && <LeftIcon id="leftIcon" size={30} />}
          {children}
          {rightIcon && <RightIcon id="rightIcon" size={30} />}
        </div>
      )}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  loadingText: PropTypes.string,
  size: PropTypes.oneOf(['default', 'small']),
  color: PropTypes.string,
  onClick: PropTypes.func,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
}

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  loadingText: 'Carregando',
  size: 'default',
  color: 'primary',
  onClick: () => {},
  leftIcon: undefined,
  rightIcon: undefined,
}

export default Button
