import React from 'react'
import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'
import { StyledTextfield } from './styles'
import Label from '../Label'

function Textfield(props) {
  const { label, width, value, onChange, isRequired } = props
  return (
    <>
      {label && <Label isRequired={isRequired}>{label}</Label>}
      <InputMask {...props}>
        {inputProps => (
          <StyledTextfield
            {...props}
            value={value}
            onChange={onChange}
            width={width}
            {...inputProps}
          />
        )}
      </InputMask>
    </>
  )
}

Textfield.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  width: PropTypes.string,
  isRequired: PropTypes.bool,
}

Textfield.defaultProps = {
  value: undefined,
  width: undefined,
  isRequired: false,
  name: undefined,
  label: undefined,
}

export default Textfield
