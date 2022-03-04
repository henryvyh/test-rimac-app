import React, { useState } from "react"
import { FormControl, MenuItem, Select, Stack, TextField } from "@mui/material"
import "./inputChoose.sass"
const items = [
  {
    label: "DNI",
    value: "dni",
    placeholder: "Nro de doc",
    props: {
      type: "tel",
      maxLength: "8",
      inputMode: "numeric",
      pattern: "[0-9]{8}",
    },
  },
  {
    label: "C.E",
    value: "passport",
    props: {
      maxLength: "12",
      pattern: "[a-z][0-9]{12}",
    },
  },
]
const InputChoose = (props) => {
  const [doc, setDoc] = useState(items[0])

  const handleChange = (event) => {
    let _v = event.target.value
    let item = items.find((a) => a.value === _v)
    setDoc(item)
  }
  return (
    <Stack direction="row" className="inputChoose">
      <FormControl className="inputChoose__select">
        <Select
          labelId="demo-simple-select-label"
          id="doc-simple-select"
          value={doc.value}
          onChange={handleChange}
        >
          {items?.map((item) => (
            <MenuItem key={item?.value} value={item?.value}>
              {item?.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        required
        inputProps={doc.props}
        className="inputChoose__input"
        id="outlined-basic"
        placeholder="Nro. de documento"
        variant="outlined"
        autoComplete="off"
        {...props}
      />
    </Stack>
  )
}

export default InputChoose
