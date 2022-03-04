import React from "react"
import ItemCoverage from "../components/coverage/ItemCoverage"
import { itemsProtect } from "./data"

const ProtectPeople = () => {
  return (
    <>
      {itemsProtect?.map((cov) => (
        <ItemCoverage key={cov.id} data={cov} />
      ))}
    </>
  )
}

export default ProtectPeople
