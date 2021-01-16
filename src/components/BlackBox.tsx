import React from 'react'
import { Box } from "@chakra-ui/react"
import { jsx, css } from '@emotion/react'

const boxStyle = css({
  backgroundColor: "black"
})
const BlackBox = () => {
  return <Box css={ boxStyle }>this is black box component</Box>
}

export default BlackBox