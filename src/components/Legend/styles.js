import styled from 'styled-components'

const StyledLegend = styled.legend`
  color: ${({ theme }) => theme.colors.inputLegend};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${props => props.theme.typography.weight.normal};
  padding-left: 3px;
  padding-right: 13px;
  /* 
  transform: translate(14px, -6px) scale(0.75);
  pointer-events: none; */
`

export default StyledLegend
