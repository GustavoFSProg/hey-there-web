import React, { useState } from 'react'
import PropType from 'prop-types'
import Checkbox from 'components/Checkbox'
import StyledRadioGroup from './styles'

function StyledRadio(props) {
  const { onChange, options, name, value, isVertical } = props
  const [selectedValue, setSelectedValue] = useState(value)

  const onChangeRadio = val => {
    setSelectedValue(val.key)
    onChange({ target: { name, value: val.key } })
  }

  return (
    <StyledRadioGroup isVertical={isVertical}>
      {options.map(x => (
        <Checkbox
          key={x.key}
          name={x.key}
          onChange={() => onChangeRadio(x)}
          checked={selectedValue === x.key}
          label={x.label}
          isRadio
        />
      ))}
    </StyledRadioGroup>
  )
}

StyledRadio.propTypes = {
  onChange: PropType.func.isRequired,
  options: PropType.arrayOf(PropType.shape({})).isRequired,
  name: PropType.string.isRequired,
  value: PropType.string,
  isVertical: PropType.bool.isRequired,
}

StyledRadio.defaultProps = {
  value: undefined,
}

export default StyledRadio
