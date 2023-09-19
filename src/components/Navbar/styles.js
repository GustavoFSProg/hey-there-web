import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme, backgroundColor }) => {
    if (backgroundColor) return backgroundColor
    return theme?.navbar?.backgroundColor || 'lightGrey'
  }};
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
  color: ${({ theme }) => theme?.navbar?.color || 'white'};
  height: ${({ theme }) => theme?.navbar?.height};
`

export const StyledBrand = styled.div`
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.weight.black};
  font-size: ${({ theme }) => theme.typography.size.md};
  padding: ${({ theme }) => theme?.navbar?.padding || '0.5rem'};
`

export const StyledLink = styled.div`
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.weight.normal};
  font-size: ${({ theme }) => theme.typography.size.xs};
  padding: 10px 8px;
  border-radius: 8px;
  &:hover {
    backdrop-filter: brightness(1.2);
  }
`
