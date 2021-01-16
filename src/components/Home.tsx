import React from 'react'
import { Box } from "@chakra-ui/react"

type Props = {
  text: string
}

const Home: React.FC<Props> = ({text}) => {
  return (
    <Box bg="tomato" h="100%" color="white">
      {text}
    </Box>
  )
}

export default Home
