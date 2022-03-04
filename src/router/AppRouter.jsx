import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import DashboardApp from "../components/dashboard/DashboardApp"
import NotFound from "../components/notfound/NotFound"
import SectionApp from "../components/section/SectionApp"
import WelcomeApp from "../components/welcome/WelcomeApp"
import AppContainer from "./AppContainer"

const AppRouter = () => {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path={`/`} component={SectionApp} />
          <Route exact path={`/dashboard/:id`} component={DashboardApp} />
          <Route exact path={`/welcome`} component={WelcomeApp} />
          <Route exact path={`/*`}>
            <NotFound />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  )
}

export default AppRouter
