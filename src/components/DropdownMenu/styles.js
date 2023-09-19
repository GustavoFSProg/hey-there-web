import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 5px 5px 0px 0px;
  z-index: 1;
  &:hover {
    background-color: inherit;
    filter: brightness(1.2);
  }
`

export const StyledDropDownLink = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 10px;
  &:hover {
    filter: brightness(1.2);
  }
`

export const StyledLink = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 10px;
  font-weight: ${({ theme }) => theme.typography.weight.normal};

  &:hover {
    opacity: ${({ theme }) => theme.opacities.soft};
  }
`

export const StyledDropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  text-align: left;
  background: inherit;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0px 5px 5px 5px;
  overflow-y: auto;
  height: auto;
`

export const StyledOptions = styled.div`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.size.xs};
  display: block;

  &:hover {
    filter: brightness(1.2);
    background-color: rgba(255, 255, 255, 0.2);
  }
`
