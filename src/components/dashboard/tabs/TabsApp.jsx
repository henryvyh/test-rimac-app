import { Tab, Tabs, createTheme, ThemeProvider } from "@mui/material"
import React, { useState } from "react"
import { itemsTabs } from "./data"
import ImprovePlan from "./ImprovePlan"
import ProtectCar from "./ProtectCar"
import ProtectPeople from "./ProtectPeople"
import "./tabsApp.sass"

export const TabsApp = ({ pricing, onAddItem, cart }) => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  function applyProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    }
  }
  const renderTabsView = () => {
    switch (value) {
      case 1:
        return <ProtectPeople />
      case 2:
        return <ImprovePlan />
      default:
        return (
          <ProtectCar onAddItem={onAddItem} cart={cart} pricing={pricing} />
        )
    }
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#EF3340",
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Tabs
        variant="fullWidth"
        className="tabs"
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {itemsTabs?.map((tab) => (
          <Tab
            key={tab.id}
            wrapped
            label={tab?.label}
            {...applyProps(tab?.id)}
          />
        ))}
      </Tabs>
      <div className="dashboard__maskPadding">{renderTabsView()}</div>
    </ThemeProvider>
  )
}
