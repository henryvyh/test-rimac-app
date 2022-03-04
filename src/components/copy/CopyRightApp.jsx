import React from "react"
import "./copyRightApp.sass"
const CopyRightApp = ({ className }) => {
  return (
    <p className={`copy ${className}`}>
      <span className="bx bx-copyright"></span> 2021 RIMAC Seguros y Reaseguros.
    </p>
  )
}

export default CopyRightApp
