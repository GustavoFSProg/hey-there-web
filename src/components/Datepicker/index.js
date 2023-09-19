import React from 'react'
import PropTypes from 'prop-types'
import StyledDatepicker from './styles'
import Label from '../Label'

function Datepicker(props) {
  const {
    isRequired,
    label,
    value,
    placeholder,
    onChange,
    name,
    maxDate,
  } = props

  return (
    <>
      <div>
        <Label isRequired={isRequired}>{label}</Label>
      </div>
      <StyledDatepicker
        placeholderText={placeholder}
        selected={value && new Date(value)}
        onSelect={event => {
          const formattedDate = new Date(event).toISOString()
          return onChange({
            target: { name, value: formattedDate },
          })
        }}
        maxDate={maxDate}
      />
    </>
  )
}

Datepicker.propTypes = {
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  maxDate: PropTypes.instanceOf(Date).isRequired,
}

Datepicker.defaultProps = {
  placeholder: 'dia / mês / ano',
  isRequired: false,
  value: undefined,
  label: '',
}

export default Datepicker
