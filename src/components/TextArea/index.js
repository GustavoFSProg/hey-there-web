import React from 'react'
import PropTypes from 'prop-types'
import StyledTextarea from './styles'
import Label from '../Label'

function TextArea({ onChange, value, label, type, ...props }) {
  const { isRequired, name } = props
  return (
    <div>
      <Label isRequired={isRequired}>{label}</Label>
      <div>
        <StyledTextarea
          {...props}
          key={name}
          value={value}
          type={type}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
}

TextArea.defaultProps = {
  value: undefined,
  isRequired: false,
  label: '',
  type: 'text',
}

export default TextArea
