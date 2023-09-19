import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledHiddenCheckbox,
  StyledIcon,
} from './styles'
import Label from '../Label'

const Checkbox = props => {
  const {
    isRequired,
    name,
    className,
    checked,
    label,
    onChange,
    startChecked,
    isRadio,
  } = props
  const [isChecked, setIsChecked] = useState(startChecked)

  return (
    <div>
      <Label isRequired={isRequired}>{label}</Label>
      <div>
        <StyledCheckboxContainer
          onClick={() => {
            if (!isRadio) setIsChecked(!isChecked)
            onChange({ target: { name, value: !isChecked } })
          }}
          className={className}
        >
          <StyledHiddenCheckbox
            onChange={onChange}
            checked={checked || isChecked}
            {...props}
          />
          <StyledCheckbox isRadio={isRadio} checked={checked || isChecked}>
            <StyledIcon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </StyledIcon>
          </StyledCheckbox>
        </StyledCheckboxContainer>
      </div>
    </div>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  startChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  isRadio: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
}

Checkbox.defaultProps = {
  label: undefined,
  checked: false,
  startChecked: false,
  isRequired: false,
  isRadio: false,
  className: '',
}

export default Checkbox
