import React from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper, StyledSelect, customStyles } from './styles'
import Legend from '../Legend'

function Select(props) {
  const {
    isRequired,
    legend,
    name,
    onChange,
    value,
    optionValue,
    options,
    noOptionsMessage,
    width,
  } = props

  return (
    <StyledWrapper width={width}>
      {legend && <Legend isRequired={isRequired}>{` ${legend} `}</Legend>}
      <StyledSelect
        {...props}
        name={name}
        value={options.find(x => x[optionValue] === value)}
        styles={customStyles}
        onChange={event => {
          onChange({
            target: {
              name,
              value: event ? event[optionValue] : undefined,
            },
          })
        }}
        noOptionsMessage={() => noOptionsMessage}
      />
    </StyledWrapper>
  )
}

Select.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  placeholder: PropTypes.string,
  legend: PropTypes.string,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  optionValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  noOptionsMessage: PropTypes.string,
  width: PropTypes.string,
}

Select.defaultProps = {
  value: undefined,
  placeholder: 'Select',
  optionValue: 'value',
  legend: undefined,
  isRequired: false,
  noOptionsMessage: 'No option',
  width: undefined,
}

export default Select
