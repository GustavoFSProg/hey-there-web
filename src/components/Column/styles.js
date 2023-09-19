import styled from 'styled-components'

const getWidthByQuantity = size => {
  if (!size) return '4.33%'
  const sizes = {
    1: '4.33%',
    2: '12.66%',
    3: '21%;',
    4: '29.33%;',
    5: '37.66%;',
    6: '46%',
    7: '54.33%',
    8: '62.66%',
    9: '71%',
    10: '79.33%',
    11: '87.66%',
    12: '96%',
  }

  return sizes[size]
}

const getButtonMargin = ({ justifyContent }) => {
  if (justifyContent === 'flex-end') {
    return `0 0 0 10px`
  }

  return `0 10px 0 0`
}

const StyledColumn = styled.div`
  align-items: ${({ alignItems }) => alignItems || 'center'};

  flex-direction: ${({ justifyContent }) =>
    justifyContent ? 'column' : 'inherit'};
  display: ${({ justifyContent }) => (justifyContent ? 'flex' : 'inherit')};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background};
  border-radius: ${({ radius }) => radius};
  border: ${({ border }) => border};

  & > button {
    margin: ${({ margin }) => margin || getButtonMargin};
  }

  width: 96%;

  /* This when column is inside row  */
  float: left;
  margin: ${({ margin }) => margin || '0.5rem 2%'};
  min-height: 0.125rem;

  @media only screen and (min-width: 45em) {
    width: ${props => getWidthByQuantity(props.size)};
  }
`

export default StyledColumn
