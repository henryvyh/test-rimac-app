import { Button, Collapse, Divider, IconButton, ListItem } from "@mui/material"
import React, { useState } from "react"
import CustomSwitch from "../../../styled/CustomSwitch"
import "./itemCoverage.sass"
const ItemCoverage = ({ data, onAdd, isAdded }) => {
  const { icon, title, description } = data
  const [open, setOpen] = useState(isAdded)
  const handleClick = () => {
    setOpen(!open)
  }
  const onAddChange = (e) => {
    console.log(e)
    onAdd(data)
  }
  return (
    <>
      <ListItem className="itemCoverage">
        <img className="itemCoverage__img" alt="Icon App" src={icon} />
        <div className="itemCoverage__title">
          <h2>{title}</h2>
        </div>
        <IconButton
          className="itemCoverage__collapseButton"
          onClick={handleClick}
          aria-label="delete"
        >
          <span
            className={`itemCoverage__collapse bx bxs-chevron-${
              open ? "up" : "down"
            }`}
          />
        </IconButton>
        <CustomSwitch
          data={data}
          isAdded={isAdded}
          onSwitch={onAddChange}
          className="itemCoverage__action__switch"
        />
      </ListItem>
      <div className="itemCoverage__action itemCoverage__action--btn">
        <Button
          className="itemCoverage__action__descktop"
          onClick={() => onAdd?.(data)}
          startIcon={
            <span className={`bx bx-${isAdded ? "minus" : "plus"}-circle`} />
          }
        >
          {isAdded ? "Quitar" : "Agregar"}
        </Button>
      </div>
      <Collapse
        className="itemCoverage__detail"
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <p>{description}</p>
      </Collapse>
      <div className="itemCoverage__action itemCoverage__action--bottom">
        <Button
          onClick={handleClick}
          className={
            open
              ? "itemCoverage__collapse--disabled"
              : "itemCoverage__collapse--mobile"
          }
          endIcon={
            <span
              className={`itemCoverage__collapse bx bxs-chevron-${
                open ? "up" : "down"
              }`}
            />
          }
        >
          {open ? "Ver menos" : "Ver más"}
        </Button>
      </div>
      <Divider />
    </>
  )
}

export default ItemCoverage
