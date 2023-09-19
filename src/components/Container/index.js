import React from 'react'
import PropType from 'prop-types'
import Row from 'components/Row'
import Column from 'components/Column'

function Container({ children }) {
  return (
    <Row>
      <Column size={12} justifyContent="center">
        <Column size={6}>{children}</Column>
      </Column>
    </Row>
  )
}

Container.propTypes = {
  children: PropType.node.isRequired,
}

export default Container
