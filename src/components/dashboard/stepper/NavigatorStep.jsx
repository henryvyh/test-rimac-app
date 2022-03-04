import { Divider, Step, StepLabel, Stepper } from "@mui/material"
import React from "react"
import "./navigatorStep.sass"
import StepperMobile from "./StepperMobile"
const steps = [{ path: "/", label: "Datos" }, { label: "Arma tu plan" }]
const NavigatorStep = ({ history }) => {
  const onBack = () => {
    history.goBack()
  }

  return (
    <>
      <div className="stepper">
        <Stepper
          className="stepper__desktop"
          orientation="vertical"
          activeStep={1}
        >
          {steps.map((item) => (
            <Step key={item?.label}>
              <StepLabel>{item?.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <StepperMobile onBack={onBack} />
      </div>
      <Divider className="stepper__divider" />
    </>
  )
}

export default NavigatorStep
