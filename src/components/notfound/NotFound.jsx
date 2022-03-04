import React from "react"
import { Link } from "react-router-dom"
import "./notFound.sass"

const NotFound = () => {
  return (
    <div className="notfound">
      <i className="bx bx-search-alt bx-tada notfound__icon"></i>
      <h1 className="notfound__title">Página no encontrada</h1>
      <p className="notfound__desc">
        Lo siento, página no encontrada. No se pudo encontrar la página
        solicitada.
      </p>
      <Link to={`/`}>
        <span className="bx bx-home"></span>
        <p>Llévame al inicio</p>
      </Link>
    </div>
  )
}

export default NotFound
