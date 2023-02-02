import { Box, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { partners } from './partnerConts'

const Partners = () => {
  return ( 
    <SimpleGrid
        column={partners.length} 
        margin="0 auto" 
        minChildWidth='150px'
    >
        {
            partners.map((partnerlogo)=>(
                <Image 
                    key={partnerlogo}
                    src={partnerlogo}
                    alignSelf="center"
                    padding={{base:'2rem', sm:'3rem'}}
                    filter="grayscale(1)"
                    opacity='0.5'
                />
            ))
        }
    </SimpleGrid>
  )
}

export default Partners