import styled from 'styled-components'

export const StyledImage = styled.div`
  position: absolute;
  display: flex;
  height: ${({ size }) => size || '60px'};
  width: ${({ size }) => size || '60px'};
  padding: 0px;
  margin: 0px;
  border-radius: 100%;
  background: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: ${({ border }) => `2px solid ${border}`};
`
