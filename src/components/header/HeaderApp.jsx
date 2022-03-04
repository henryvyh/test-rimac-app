import React from "react"
import "./headerApp.sass"
import { Link } from "react-router-dom"
import icon from "../../assets/images/iconRimac.png"
const HeaderApp = () => {
  return (
    <header className="header">
      <Link to={`/`}>
        <img alt="Icon App" src={icon} />
      </Link>
      <div className="header__contact">
        <p>¿Tienes alguna duda?</p>
        <a
          href="tel:(01) 411 6001"
          target="_blank"
          className="header__call"
          rel="noreferrer"
        >
          <span className="bx bx-phone"></span>
          <p>(01) 411 6001</p>
          <p>Llámanos</p>
        </a>
      </div>
    </header>
  )
}

export default HeaderApp
