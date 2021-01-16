import React from 'react'
import { Box } from "@chakra-ui/react"
import { jsx, css } from '@emotion/react'

const boxStyle = css({
  backgroundColor: "blue"
})
const BlueBox = () => {
  return <Box css={ boxStyle }>this is blue box comopnent</Box>
}

export default BlueBox
