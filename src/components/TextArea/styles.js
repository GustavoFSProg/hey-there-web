import styled from 'styled-components'

const StyledTextarea = styled.textarea`
  display: block;
  padding: 0.3em 5px;
  font-size: ${({ theme }) => theme.typography.size.sm};
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
  max-width: 100%;
  min-height: 40px;

  &::placeholder {
    font-family: ${({ theme }) => theme.typography.type.primary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    letter-spacing: 0.5px;
    font-weight: ${({ theme }) => theme.typography.weight.light};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: 0;
  }
`

export default StyledTextarea
