import { Button, Divider, IconButton } from "@mui/material"
import React, { useState } from "react"
import { ButtonAction } from "../styled/ButtonAction"
import "./dashboardApp.sass"
import { TabsApp } from "./tabs/TabsApp"
import CarCard from "./components/card/CarCard"
import { itemsCoverage, itemsInclude } from "./tabs/data"
import { Redirect, useHistory } from "react-router-dom"
import NavigatorStep from "./stepper/NavigatorStep"
import { useDispatch, useSelector } from "react-redux"
import {
  addProductCart,
  removeProductCart,
} from "../../redux/product/StoreActions"

const PRICINGRANGE = {
  MAX: 16500,
  MIN: 12500,
  BASE: 20,
  VIEW: 14300,
}
const DashboardApp = () => {
  const dispatch = useDispatch()
  const { user, cart } = useSelector((reducers) => reducers.storeReducer)
  const [pricing, setPricing] = useState(PRICINGRANGE.VIEW)
  const history = useHistory()
  let itemAutoDel = itemsCoverage[1]
  let _isNotMinus = pricing === PRICINGRANGE.MIN
  let _isNotPlus = pricing === PRICINGRANGE.MAX
  let showPricing = PRICINGRANGE.BASE + cart?.reduce((a, b) => a + b.price, 0)
  const callbackSubmit = async () => {
    history.push({
      pathname: "/welcome",
      state: { data: user, amount: pricing + showPricing },
    })
  }
  const onChangePricing = (e) => {
    let _new = e ? 100 : -100
    let _val = pricing + _new
    if (_val < PRICINGRANGE.MIN || _val > PRICINGRANGE.MAX) return
    if (_val > 16000 && isAddedCoverage(itemAutoDel)) {
      removeProductCart(dispatch, itemAutoDel)
    }
    setPricing(_val)
  }
  const isAddedCoverage = (e) => !!cart?.find((d) => d.id === e.id)
  const onAddItem = (e) => {
    const isAddd = isAddedCoverage(e)
    isAddd ? removeProductCart(dispatch, e) : addProductCart(dispatch, e)
  }
  if (!user?.id) return <Redirect to={`/`} />
  return (
    <section className="dashboard">
      <NavigatorStep history={history} />

      <div className="dashboard__data">
        <Button
          className="dashboard__prev"
          onClick={() => history.push("/")}
          startIcon={<span className="bx bx-chevron-left-circle" />}
        >
          VOLVER
        </Button>
        <div className="dashboard__maskMobile">
          <h1 className="dashboard__data__title">
            ¡Hola, <span>{user?.name}!</span>
          </h1>
          <h1 className="dashboard__data__title dashboard__data__title--view">
            Mira las coberturas
          </h1>
          <p className="dashboard__data__description">
            Conoce las coberturas para tu plan
          </p>
          <CarCard user={user} />
        </div>

        <article className="dashboard__count dashboard__maskPadding">
          <div className="dashboard__count__body">
            <h2>Indica la suma asegurada</h2>
            <p>
              MIN ${PRICINGRANGE.MIN} | MAX ${PRICINGRANGE.MAX}
            </p>
          </div>
          <div className="dashboard__count__action">
            <IconButton
              disabled={_isNotMinus}
              onClick={() => onChangePricing(0)}
              aria-label="delete"
            >
              <span className="bx bx-minus" />
            </IconButton>
            <h3>$ {pricing}</h3>
            <IconButton
              disabled={_isNotPlus}
              onClick={() => onChangePricing(1)}
              aria-label="delete"
            >
              <span className="bx bx-plus" />
            </IconButton>
          </div>
        </article>

        <Divider />

        <div className="dashboard__maskPadding">
          <h3 className="dashboard__data__subtitle">
            Agrega o quita coberturas
          </h3>
        </div>
        <TabsApp onAddItem={onAddItem} cart={cart} pricing={pricing > 16000} />
      </div>
      <div className="dashboard__resume">
        <div className="dashboard__resume__wrap">
          <h3 className="dashboard__resume__title">Monto</h3>
          <h2 className="dashboard__resume__price">
            $ {showPricing.toFixed(2)}
          </h2>
          <p className="dashboard__resume__subtitle">mensuales</p>
          <Divider className="dashboard__divider" />
          <h4>El precio incluye:</h4>
          <ul>
            {itemsInclude?.map((item) => (
              <li key={item?.label}>
                <span className="bx bx-check"></span>
                <p>{item?.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <ButtonAction
          onClick={() => callbackSubmit()}
          className="dashboard__submit"
        >
          lo quiero
        </ButtonAction>
      </div>
    </section>
  )
}

export default DashboardApp
