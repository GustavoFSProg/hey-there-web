import React from 'react'
import Row from 'components/Row'
import Column from 'components/Column'

const colors = ['#6d6073', '#574b5d', '#3c3341', '#241b28', '#221428']

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Row backgroundColor="white" radius="5px">
        {colors.map((color, index) => {
          return (
            <Column
              key={index}
              size={2}
              style={{
                height: '100px',
                width: '100px',
                background: `${color}`,
              }}
            >
              Teste
            </Column>
          )
        })}
      </Row>
    </>
  )
}

export default Home
