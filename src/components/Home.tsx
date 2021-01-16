/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { Box, Grid, Flex, HStack, Center } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import BlackBox from './BlackBox';
import BlueBox from './BlueBox';
import { jsx, css } from '@emotion/react'

const routerLinkBtn = css({
  width: "100%",
  height: "100%",
  textAlign: "center",
  padding: "5px 0"
})

type Props = {
  text: string
}

const Home: React.FC<Props> = ({ text }) => {
  const match = useRouteMatch()
  return (
    <Box bg="tomato" h="100%" color="white">
      <Grid h="100%" templateRows="repeat(2, 1fr)">
        <Box>
          {text}
          <Flex h="100%" justify="center" color="white">
            <HStack spacing="18px">
              <Center w="100px" bg="blue.500">
                <Link css={routerLinkBtn} to={`${match.path}/black`}>BlackBox</Link>
              </Center>
              <Center w="100px" bg="blue.500">
                <Link css={routerLinkBtn} to={`${match.path}/blue`}>BlueBox</Link>
              </Center>
            </HStack>
          </Flex>
        </Box>
        <Switch>
          <Route path={`${match.url}/black`}>
            <BlackBox />
          </Route>
          <Route path={`${match.url}/blue`}>
            <BlueBox />
          </Route>
          <Route path={`${match.url}/`}>
            <BlackBox />
          </Route>
        </Switch>
      </Grid>
    </Box>
  )
}

export default Home
