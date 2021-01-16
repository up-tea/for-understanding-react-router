import React from 'react'
import { Grid } from "@chakra-ui/react"
import Header from './Header'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoContents from './NoContents';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Container: React.FC = () => {

  return (
    <Grid templateRows="88px 1fr" h="100vh" w="100%">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About text="this is about" />
          </Route>
          <Route path="/contact">
            <Contact text="this is contact" />
          </Route>
          <Route path="/home">
            <Home text="this is home" />
          </Route>
          <Route path="*">
            <NoContents />
          </Route>
        </Switch>
      </Router>
    </Grid>
  )
}

export default Container
