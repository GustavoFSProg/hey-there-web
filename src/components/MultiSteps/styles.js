import styled from 'styled-components'

export const StyledWrapper = styled.div``

export const StyledStepsOnboarding = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 30px;
`

export const StyledCircleWrapper = styled.div`
  width: ${({ width }) => `${width}%`};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledCircle = styled.div`
  transition: all 0.5s ease-in;
  opacity: ${({ isActive, hasVisited }) => {
    if (isActive) return 1
    if (hasVisited) return 0.8
    return 0.3
  }};
  background: ${({ theme, isActive }) => {
    if (isActive) return theme.colors.primary
    return theme.colors.white
  }};
  color: ${({ theme, isActive }) =>
    !isActive ? theme.colors.primary : theme.colors.white};
  border: ${({ theme }) => `solid ${theme.colors.primary} 1px`};

  cursor: pointer;
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 100px;
  text-align: center;
`

const multiplySize = (size, multiplyBy) =>
  `${size.replace('px', '') * multiplyBy}px`

export const StyledLine = styled.div`
  transition: all 0.5s ease-in;
  height: 2px;
  background: ${({ theme, hasVisited }) =>
    hasVisited ? theme.colors.primary : 'lightGrey'};
  border-radius: ${({ theme }) => multiplySize(theme.border.radius, 2)};
  width: 70%;
  padding: 0px 10px;
  margin: 0 auto;
`

export const StyledStep = styled.div``
