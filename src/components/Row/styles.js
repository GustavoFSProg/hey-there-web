import styled from 'styled-components'

const StyledRow = styled.div`
  display: ${({ inline }) => (inline ? 'flex' : null)};
  align-items: ${({ inline }) => (inline ? 'center' : null)};
  flex-direction: ${({ inline }) => (inline ? 'inline' : null)};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : null)};
  position: relative;
  width: 100%;

  /* border-bottom-color: ${({ theme }) =>
    theme?.row?.borderColor || theme.colors.primary};
  border-bottom-style: solid;
  border-bottom-width: 1px; */

  border-radius: ${({ theme, radius }) => theme?.row?.borderRadius || radius};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  background-color: ${({ backgroundColor, theme }) => {
    if (!backgroundColor) return null
    if (backgroundColor === 'primary') return theme?.colors?.primary
    if (backgroundColor === 'secondary') return theme?.colors?.secondary
    if (backgroundColor === 'textPrimary') return theme?.colors?.textPrimary
    if (backgroundColor === 'textSecondary') return theme?.colors?.textSecondary
    if (backgroundColor === 'silver') return theme?.colors?.silver
    if (backgroundColor === 'white') return theme?.colors?.white
    if (backgroundColor === 'black') return theme?.colors?.black
    if (backgroundColor === 'success') return theme?.colors?.success
    if (backgroundColor === 'warning') return theme?.colors?.warning
    if (backgroundColor === 'danger') return theme?.colors?.danger
    if (backgroundColor === 'error') return theme?.colors?.error
    return backgroundColor || 'inherit'
  }};

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`
export default StyledRow
