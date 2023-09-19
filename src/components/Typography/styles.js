import styled from 'styled-components'

const StyledTypography = styled.div`
  font-family: ${({ theme }) => theme.typography.type.primary};
  font-size: ${props => {
    if (props.size === 'xxs') return props.theme.typography.size.xxs
    if (props.size === 'xs') return props.theme.typography.size.xs
    if (props.size === 'sm') return props.theme.typography.size.sm
    if (props.size === 'md') return props.theme.typography.size.md
    if (props.size === 'lg') return props.theme.typography.size.lg
    if (props.size === 'xl') return props.theme.typography.size.xl
    if (props.size === 'xxl') return props.theme.typography.size.xxl
    return props.theme.typography.md
  }};
  font-weight: ${props => {
    if (props.weight === 'regular') return props.theme.typography.weight.regular
    if (props.weight === 'thin') return props.theme.typography.weight.thin
    if (props.weight === 'light') return props.theme.typography.weight.light
    if (props.weight === 'bold') return props.theme.typography.weight.bold
    return props.theme.typography.weight.black
  }};

  line-height: ${({ lineHeight }) => lineHeight};

  letter-spacing: 0.4px;

  color: ${props => {
    if (props.color === 'initial') return props.theme.colors.initial
    if (props.color === 'inherit') return props.theme.colors.inherit
    if (props.color === 'primary') return props.theme.colors.primary
    if (props.color === 'secondary') return props.theme.colors.secondary
    if (props.color === 'textPrimary') return props.theme.colors.textPrimary
    if (props.color === 'textSecondary') return props.theme.colors.textSecondary
    return props.color
  }};
`

export default StyledTypography
