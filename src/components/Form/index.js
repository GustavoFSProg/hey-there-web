import React from 'react'
import PropType from 'prop-types'
import Row from 'components/Row'
import Column from 'components/Column'
import Typography from 'components/Typography'
import Textfield from 'components/Textfield'
import Button from 'components/Button'
import Loader from 'components/Loader'
import GoogleButton from 'components/GoogleButton'

function Form(props) {
  const {
    title,
    renderComponents,
    fields,
    handleFields,
    onKeyDown,
    loading,
  } = props

  return (
    <Column
      size={7}
      style={{ background: 'rgba(255, 255, 255, 0.1)' }}
      radius="10px"
      padding="0px 1rem 1rem 1rem"
    >
      <Row>
        <Column size={12} justifyContent="center" margin="2rem 2%">
          <Typography size="xl" weight="light">
            {title}
          </Typography>
        </Column>
      </Row>

      <Row>
        <Column size={12}>
          <Loader color="yellow" loading={loading} />
          {renderComponents.map(item => {
            if (item.type === 'input') {
              const name = item.name.toLocaleLowerCase()
              return (
                <Textfield
                  key={item.name}
                  style={{ marginBottom: '1rem' }}
                  label={item.name}
                  placeholder={item.name}
                  type={name === 'name' ? 'text' : name}
                  name={name}
                  value={fields[name]}
                  onChange={handleFields}
                  onKeyDown={onKeyDown}
                />
              )
            }
            if (item.type === 'button') {
              return (
                <Button
                  key={item.name}
                  color="submitColor"
                  type="submit"
                  fullWidth
                  style={{ margin: '1rem 0px' }}
                  onClick={item.onClick}
                >
                  {item.name}
                </Button>
              )
            }
            return (
              <div key={item.name}>
                <Column size={12} justifyContent="center">
                  <Typography size="sm" weight="bold">
                    OR
                  </Typography>
                </Column>

                <GoogleButton
                  text={item.name}
                  responseGoogle={item.responseGoogle}
                />
              </div>
            )
          })}
        </Column>
      </Row>
    </Column>
  )
}

Form.propTypes = {
  title: PropType.string.isRequired,
  renderComponents: PropType.arrayOf(PropType.shape({})).isRequired,
  fields: PropType.shape({}).isRequired,
  handleFields: PropType.func.isRequired,
  onKeyDown: PropType.func.isRequired,
  loading: PropType.bool.isRequired,
}

export default Form
