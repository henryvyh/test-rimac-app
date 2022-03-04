import { IconButton, MobileStepper } from "@mui/material"
import React from "react"
import "./navigatorStep.sass"

const StepperMobile = ({ onBack }) => {
  return (
    <MobileStepper
      className="stepper__mobile"
      variant="progress"
      steps={1}
      position="static"
      activeStep={1}
      backButton={
        <div className="stepper__mobile__body">
          <IconButton onClick={() => onBack()} aria-label="delete">
            <span className="bx bx-chevron-left-circle" />
          </IconButton>
          <p>Paso 2 de 2</p>
        </div>
      }
    />
  )
}

export default StepperMobile
