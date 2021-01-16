import React from 'react'
import { Box } from "@chakra-ui/react"

type Props = {
  text: string
}

const About: React.FC<Props> = ({text}) => {
  return (
    <Box bg="purple.500" h="100%" color="white">
      {text}
    </Box>
  )
}

export default About
