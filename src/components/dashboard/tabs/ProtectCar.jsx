import React from "react"
import ItemCoverage from "../components/coverage/ItemCoverage"
import { itemsCoverage } from "./data"

const ProtectCar = ({ pricing, onAddItem, cart }) => {
  const isAddd = (k) => !!cart?.find((d) => d.id === k.id)
  return (
    <>
      {itemsCoverage
        ?.filter((i) => i.id !== 2 || !pricing)
        ?.map((cov) => (
          <ItemCoverage
            key={cov.id}
            data={cov}
            onAdd={onAddItem}
            isAdded={isAddd(cov)}
          />
        ))}
    </>
  )
}

export default ProtectCar
