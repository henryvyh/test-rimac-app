import React from "react"
import icon from "../../../../assets/images/userView.png"
import "./carCard.sass"
const CarCard = ({ user }) => {
  const _car = user.vehicle?.length ? user.vehicle[0] : {}
  const { brand, year, placa, model } = _car
  return (
    <article className="carCard">
      <div className="carCard__data">
        <h3>Placa: {placa}</h3>
        <h2>
          {brand} {year} {model}
        </h2>
      </div>
      <img className="carCard__icon" alt="Icon App" src={icon} />
    </article>
  )
}

export default CarCard
