import styled from 'styled-components'
import { rgba } from 'polished'

const size = 350

export const FixedBackground = styled.div`
  position: relative;
  background: white;
  width: ${({ width }) => width || '100%'};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
`

export const StyledCard = styled.div`
  position: relative;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadows.box.medium};
  height: ${({ height }) => `${height || size}px`};
  cursor: pointer;
  opacity: 0.8;
  line-height: 0.9;
  border-radius: ${({ radius }) => radius || '5px'};

  &:hover {
    opacity: 1;

    & > div {
      opacity: 0.9;
      background: ${rgba('white', 0.8)};
    }
  }
`

export const StyledImage = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: ${({ height }) => `${height || size}px`};
  border-radius: ${({ radius }) => radius || '5px'};
`

export const StyledLegend = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  color: black;
  background: ${rgba('white', 0.5)};
  opacity: 0.7;
  border-radius: ${({ radius }) => radius || '0px 0px 5px 5px'};
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
`
