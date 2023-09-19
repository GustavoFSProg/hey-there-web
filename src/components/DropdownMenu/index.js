import React, { useState } from 'react'
import PropType from 'prop-types'
import {
  DropdownWrapper,
  StyledDropDownLink,
  StyledDropdownContent,
  StyledOptions,
} from './styles'

function DropdownMenu(props) {
  const { onSelectOption, title, options } = props
  const [isOpen, setIsOpen] = useState(false)

  const onChangeField = key => {
    setIsOpen(false)
    onSelectOption(key)
  }

  return (
    <DropdownWrapper
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <StyledDropDownLink>{title}</StyledDropDownLink>
      <StyledDropdownContent isOpen={isOpen}>
        {options.map((option, index) => {
          return (
            <StyledOptions
              key={index}
              value={option}
              onClick={() => {
                onChangeField({ target: { name: title, value: option.action } })
              }}
            >
              {option.name}
            </StyledOptions>
          )
        })}
      </StyledDropdownContent>
    </DropdownWrapper>
  )
}

DropdownMenu.propTypes = {
  onSelectOption: PropType.func,
  initialFilters: PropType.shape({}),
  title: PropType.string.isRequired,
  options: PropType.arrayOf(
    PropType.shape({
      name: PropType.string,
      action: PropType.string,
    })
  ).isRequired,
}

DropdownMenu.defaultProps = {
  onSelectOption: () => null,
  initialFilters: {},
}

export default DropdownMenu
