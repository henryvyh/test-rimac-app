import React from "react"
import HeaderApp from "../components/header/HeaderApp"

const AppContainer = (props) => {
  const { children } = props
  return (
    <>
      <HeaderApp />
      {children}
    </>
  )
}

export default AppContainer
