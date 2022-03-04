import { Checkbox } from "@mui/material"
import React from "react"
import "./termsApp.sass"
const TermsApp = ({ onChangeTerms }) => {
  return (
    <blockquote className="terms">
      <Checkbox
        onChange={(e) => onChangeTerms(e.target.checked)}
        sx={{
          color: "#43B748",
          "&.Mui-checked": {
            color: "#43B748",
          },
        }}
      />
      <p className="terms__text">
        Acepto la{" "}
        <a href="#" target="_blank" rel="noreferrer">
          Política de Protecciòn de Datos Personales
        </a>{" "}
        y los{" "}
        <a href="#" target="_blank" rel="noreferrer">
          Términos y Condiciones
        </a>
        .
      </p>
    </blockquote>
  )
}

export default TermsApp
