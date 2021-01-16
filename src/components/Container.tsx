import React from 'react'
import { Grid } from "@chakra-ui/react"
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Container: React.FC = () => {
  return (
    <Grid templateRows="88px 1fr" h="100vh" w="100%">
      <Router>
        <Header />
        <Switch>
          <Route extract path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </Grid>
  )
}

export default Container
