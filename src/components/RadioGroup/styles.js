import styled from 'styled-components'

const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};
`

export default StyledRadioGroup
