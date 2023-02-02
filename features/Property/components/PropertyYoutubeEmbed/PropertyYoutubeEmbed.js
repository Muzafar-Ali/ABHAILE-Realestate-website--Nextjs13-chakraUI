import { Box } from '@chakra-ui/react'
import React from 'react'

const PropertyYoutubeEmbed = ({coverVideo}) => {
  const ratio = (315 / 560) * 100;
  return (
    <Box
      // paddingTop="100"
      paddingTop={`${ratio}%`}
      position="relative"
      height="0"
      overflow="hidden"
      frameBorder = "0"
    >
      <iframe 
        style={{position:"absolute", top:"0", bottom:"0"}}
        width="100%"
        height='100%'
        src={`https://www.youtube.com/embed/${coverVideo}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
       This is iframe
    </Box>

  )
}

export default PropertyYoutubeEmbed