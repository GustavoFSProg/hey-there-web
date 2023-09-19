import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'components/Typography'
import { FixedBackground, StyledCard, StyledImage, StyledLegend } from './style'
import notFound from './not-found.png'

function Card(props) {
  const { title, subtitle, onClick, image } = props

  return (
    <FixedBackground {...props}>
      <StyledCard onClick={onClick} {...props}>
        <StyledImage src={image || notFound} {...props} />
        {title || subtitle ? (
          <StyledLegend {...props}>
            {title ? (
              <Typography size="lg" weight="bold">
                {title}
              </Typography>
            ) : null}
            {subtitle ? (
              <Typography size="sm" lineHeight={1}>
                {subtitle}
              </Typography>
            ) : null}
          </StyledLegend>
        ) : null}
      </StyledCard>
    </FixedBackground>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
}

Card.defaultProps = {
  image: undefined,
  title: undefined,
  subtitle: undefined,
  onClick: () => null,
}

export default Card
