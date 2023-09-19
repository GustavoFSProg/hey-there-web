import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'
import Datepicker from 'react-datepicker'

const StyledDatepicker = styled(Datepicker)`
  display: block;
  padding: 0.3em 5px;
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  background-image: none;
  background-clip: padding-box;
  border: ${({ theme }) => `2px ${theme.colors.silver} solid`};
  border-radius: ${props => props.theme.border.radius};
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

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: 0;
  }
`

export default StyledDatepicker
