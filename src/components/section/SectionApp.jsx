import React, { useState } from "react"
import CopyRightApp from "../copy/CopyRightApp"
import { ButtonAction } from "../styled/ButtonAction"
import TermsApp from "../terms/TermsApp"
import "./sectionApp.sass"
import { TextField } from "@mui/material"
import icon from "../../assets/images/iconUserHome.png"
import InputChoose from "./input/InputChoose"
import { Redirect, useHistory } from "react-router-dom"
import { authUserAction } from "../../redux/product/StoreActions"
import { useDispatch, useSelector } from "react-redux"
import { StorageApp } from "../../config/store"
import { toast } from "react-toastify"
import TaskService from "../task/TaskService"
const SectionApp = () => {
  const { user } = useSelector((reducer) => reducer.storeReducer)
  const dispatch = useDispatch()
  const history = useHistory()
  const [terms, setTerms] = useState(false)
  const [dataObj, setDataObj] = useState({
    document: "",
    phone: "",
    placa: "",
  })
  const { phone, placa, document } = dataObj
  const onChangeInputs = (e) => {
    let _val = e?.target?.value?.toUpperCase()
    let _name = e.target.name
    if (_name === "placa" || _name === "placa") {
      setDataObj({ ...dataObj, [_name]: _val })
    } else {
      let testR = new RegExp(/^[0-9\b]+$/)
      let _res = testR.test(_val)
      if (_res || _val === "") setDataObj({ ...dataObj, [_name]: _val })
    }
  }
  const callbackSubmit = async (e) => {
    e.preventDefault()
    if (!terms) return toast.info("Por favor acepte los terminos del servicio.")
    TaskService.show()
    await authUserAction(dataObj, dispatch, onAuth)
    TaskService.hide()
  }
  const onAuth = (e) => {
    StorageApp.setItem({ user: e })
    history.replace("/dashboard/" + e?.id)
  }

  if (user?.id) return <Redirect to={`/dashboard/${user?.id}`} />
  return (
    <section className="auth">
      <blockquote className="auth__info">
        <div className="auth__info__img">
          <img alt="Icon App" src={icon} />
        </div>
        <article className="auth__info__text">
          <h3 className="auth__info__subtitle">¡NUEVO!</h3>
          <h1 className="auth__info__title">
            Seguro <span>Vehicular Tracking</span>
          </h1>
          <p className="auth__info__description">
            Cuentanos donde le haras seguimiento a tu seguro
          </p>
        </article>
        <CopyRightApp className="auth__copy" />
      </blockquote>
      <blockquote className="auth__data">
        <form onSubmit={callbackSubmit} className="auth__data__wrap">
          <h1 className="auth__data__title">Déjanos tus datos</h1>
          <InputChoose
            onChange={onChangeInputs}
            value={document}
            name="document"
          />
          <TextField
            required
            className="auth__data__input"
            id="outlined-basic"
            placeholder="Celular"
            variant="outlined"
            autoComplete="off"
            value={phone}
            name="phone"
            inputProps={{
              type: "tel",
              maxLength: "9",
              inputMode: "numeric",
              pattern: "[9][0-9]{8}",
            }}
            onChange={onChangeInputs}
          />
          <TextField
            required
            className="auth__data__input"
            id="outlined-basic"
            placeholder="Placa XXX-000"
            variant="outlined"
            autoComplete="off"
            value={placa}
            name="placa"
            inputProps={{
              type: "text",
              maxLength: "7",
              pattern: "[A-Z]{3}[-][0-9]{3}",
            }}
            onChange={onChangeInputs}
          />
          <TermsApp onChangeTerms={(e) => setTerms(e)} />
          <div className="auth__footer">
            <ButtonAction type="submit" className="auth__submit">
              cotízalo
            </ButtonAction>
          </div>
        </form>
      </blockquote>
    </section>
  )
}

export default SectionApp
