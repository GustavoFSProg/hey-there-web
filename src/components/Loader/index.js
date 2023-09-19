import React from 'react'
import PropType from 'prop-types'
import { css } from '@emotion/core'
import { FadeLoader } from 'react-spinners'

const override = css`
  display: flex;
  margin: 0 auto;
`

function Loader({ color, loading }) {
  return (
    <div className="sweet-loading">
      <FadeLoader
        css={override}
        height={10}
        width={15}
        radius={5}
        margin={10}
        color={color || 'blue'}
        loading={loading}
      />
    </div>
  )
}

Loader.propTypes = {
  loading: PropType.bool,
  color: PropType.string,
}

Loader.defaultProps = {
  color: undefined,
  loading: true,
}

export default Loader
