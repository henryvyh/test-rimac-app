import React from "react"
import ItemCoverage from "../components/coverage/ItemCoverage"
import { itemsImprove } from "./data"

const ImprovePlan = () => {
  return (
    <>
      {itemsImprove?.map((cov) => (
        <ItemCoverage key={cov.id} data={cov} />
      ))}
    </>
  )
}

export default ImprovePlan
