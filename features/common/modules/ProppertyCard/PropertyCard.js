import { Badge, Box, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react'
import { useProprtyFormate } from '../../Hooks/useProprtyFormate'
import {TbBath, TbBed, TbRuler} from 'react-icons/tb'
import Link from 'next/link';

const PropertyCard = (property) => {
  
  const {
      address,
      coverPhotto,
      propertyType,
      price,
      title,
      rooms,
      baths,
      purpose,
      sqSize,
      externalID 
    } = useProprtyFormate(property);

  return (
    <Box marginTop='4rem' backgroundColor='#fff'>
      <Link href={`/properties/${externalID}`}>
        <Box 
          backgroundImage={`url("${coverPhotto}")`}
          height= "250px"
          backgroundSize='cover'
          backgroundPosition="center center"
          position='relative'
          display='flex'
          flexDirection='column'
          justifyContent="space-between"
        >
          <Box margin='1rem'>
            <Badge colorScheme='green'>{purpose}</Badge>
          </Box>
          <Box 
            bgGradient='linear(to-t, #0a0b1cd9, #ffffff00  100%)' 
            height='50%'
            display='flex'
            alignItems='flex-end'
            padding='1rem'
          >
            <Text color="whiteAlpha.800" fontWeight='medium' fontSize='3xl'>{price}</Text> 
          </Box>
        </Box>
        <Box padding='1rem'>
          <Text fontSize='xl' fontWeight='medium' marginBottom='1rem'>{propertyType}</Text>
          <Text fontSize='sm' fontWeight='light' isTruncated>{address}</Text>
          <Text isTruncated>{title}</Text>
          <HStack spacing='1.3rem' marginTop='1rem'>
            <Flex alignItems='center' gap='0.3rem'>
              <TbBed/>
              {rooms}
            </Flex>
            <Flex alignItems='center' gap='0.3rem'>
              <TbBath/>
              {baths}
            </Flex>
            <Flex alignItems='center' gap='0.3rem'>
              <TbRuler/>
              {sqSize}
              <sup>m2</sup>
            </Flex>
          </HStack>
        </Box>
      </Link>
    </Box>
  )
}

export default PropertyCard