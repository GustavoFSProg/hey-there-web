import ReactSelect from 'react-select'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
  width: ${({ width }) => width || '100%'};
`

export const StyledSelect = styled(ReactSelect)`
  -webkit-transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
  box-sizing: border-box;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: 0;
  }
`

export const customStyles = {
  option: provided => ({
    ...provided,
    borderBottom: 'none',
  }),
}
