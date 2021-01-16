/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { GridItem, Flex, Center, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { jsx, css } from '@emotion/react'

const routerLinkBtn = css({
  width: "100%",
  height: "100%",
  textAlign: "center",
  padding: "5px 0"
})
const Header: React.FC = () => {
  return (
    <GridItem bgGradient="linear(to-l, #7928CA, #FF0080)" w="100%" color="white">
      <Flex h="100%" justify="center" color="white">
        <HStack spacing="18px">
          <Center w="100px" bg="blue.500">
            <Link css={routerLinkBtn} to="/">hone</Link>
          </Center>
          <Center w="100px" bg="blue.500">
            <Link css={routerLinkBtn} to="/about">about</Link>
          </Center>
          <Center w="100px" bg="blue.500">
            <Link css={routerLinkBtn} to="/contact">contact</Link>
          </Center>
        </HStack>
      </Flex>
    </GridItem>
  )
}

export default Header
