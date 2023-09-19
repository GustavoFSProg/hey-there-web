import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Row from 'components/Row'
import Column from 'components/Column'
import Button from 'components/Button'

import {
  StyledCircle,
  StyledStepsOnboarding,
  StyledCircleWrapper,
  StyledLine,
  StyledWrapper,
} from './styles'

export function Step({ children }) {
  return children
}

function MultiSteps({
  children,
  initialStep,
  disableNextStep,
  onFinishSteps,
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(initialStep)
  const { push } = useHistory()

  const isLastStep = currentStep === children.length - 1
  const isFirstStep = currentStep === 0

  return (
    <StyledWrapper {...rest}>
      <StyledStepsOnboarding>
        {children.map((c, index) => (
          <StyledCircleWrapper key={index} width={100 / children.length}>
            <StyledCircle
              isActive={index === currentStep}
              hasVisited={currentStep > index}
              onClick={() => setCurrentStep(index)}
            >
              {currentStep <= index ? index + 1 : '✔'}
            </StyledCircle>
            <StyledLine hasVisited={currentStep > index} />
          </StyledCircleWrapper>
        ))}
      </StyledStepsOnboarding>
      {React.cloneElement(children[currentStep])}
      <Row>
        <Column size={12} justifyContent="space-between">
          {isFirstStep ? (
            <div />
          ) : (
            <Button
              isDisabled={disableNextStep}
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Anterior
            </Button>
          )}
          <Button onClick={() => push('/dashboard')}>Cancelar</Button>
          {isLastStep ? (
            <Button isDisabled={disableNextStep} onClick={onFinishSteps}>
              Finalizar
            </Button>
          ) : (
            <Button
              isDisabled={disableNextStep}
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Próximo
            </Button>
          )}
        </Column>
      </Row>
    </StyledWrapper>
  )
}

MultiSteps.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  initialStep: PropTypes.number,
  disableNextStep: PropTypes.bool,
  onFinishSteps: PropTypes.func.isRequired,
}

MultiSteps.defaultProps = {
  initialStep: 0,
  disableNextStep: false,
}

MultiSteps.Step = Step
export default MultiSteps
