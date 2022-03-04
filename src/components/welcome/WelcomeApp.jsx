import React, { useEffect } from "react"
import { ButtonAction } from "../styled/ButtonAction"
import "./welcomeApp.sass"
import icon from "../../assets/images/iconUser.png"
import iconMask from "../../assets/images/maskWelcome.png"
import CopyRightApp from "../copy/CopyRightApp"
import { Redirect, useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { StorageApp } from "../../config/store"
import { STORE_TYPE } from "../../redux/product/StoreTypes"

const WelcomeApp = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((reducers) => reducers.storeReducer)
  const history = useHistory()
  const {
    location: { state },
  } = history
  const callbackSubmit = async () => {
    let again = window.confirm(
      "Gracias por contratar el seguro, ahora se redigirá a la página de inicio para contratar un nuevo seguro."
    )
    if (again) {
      StorageApp.clear()
      dispatch({
        type: STORE_TYPE.EXIT_USER,
        payload: null,
      })
      history.replace("/")
    }
  }
  useEffect(() => {
    toast.success(
      `${user?.name}, gracias por contratar el servicio, para terminar haz click en "Cómo usar mi seguro" y acontinuacón en aceptar.`
    )
  }, [])
  if (!state)
    return <Redirect to={`${user?.id ? `/dashboard/${user?.id}` : "/"}`} />
  return (
    <section className="welcome">
      <div className="welcome__icon">
        <img className="mask" alt="Icon App" src={iconMask} />
        <img className="img" alt="Icon App" src={icon} />
      </div>
      <div className="welcome__info">
        <h2 className="welcome__info__subtitle">¡Te damos la bienvenida!</h2>
        <h1 className="welcome__info__title">
          Cuenta con nosotros para proteger tu vehículo
        </h1>
        <p className="welcome__info__description">
          Enviaremos la confirmación de compra de tu Plan Vehícular Tracking{" "}
          <b>(De un monto de $ {state?.amount.toFixed(2)} )</b> a tu correo:
          <a
            href="mailto:joel.sanchez@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            {user?.email}
          </a>
        </p>
        <div className="welcome__mask">
          <ButtonAction className="welcome__submit" onClick={callbackSubmit}>
            cómo usar mi seguro
          </ButtonAction>
        </div>
      </div>
      <CopyRightApp className="welcome__copy" />
    </section>
  )
}

export default WelcomeApp
