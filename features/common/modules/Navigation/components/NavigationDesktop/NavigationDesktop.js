import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import {HiHomeModern} from "react-icons/hi2"
import { navigationLinks } from '../../navigationConsts'

const NavigationDesktop = () => {
  return (
    <Box 
      color="blue.600"
      paddingY="2rem"
      backgroundColor="white"
      display={{base:"none", md:"block"}}
    >
      <Box maxWidth='1280px' margin="0 auto">
        <Flex alignItems="center" justifyContent='space-between'>
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              <HiHomeModern size="30px"/>
              <Text fontSize="2xl" fontWeight="semibold">ABHAILE</Text>
            </Box>
          </Link>
          <Flex gap="12" alignItems="center" fontWeight="MenuItem">
            {
              navigationLinks.map((item)=>(
                <NavigationLink key={item.title} {...item }/>
              ))
            }
            <Button padding="1.5rem" colorScheme='twitter' fontSize='0.8rem' fontWeight='medium'>CREATE LISTING</Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default NavigationDesktop;

const NavigationLink = ({link, title, icon})=>{
  return(
    <Link href={link}>
      <Flex alignItems="Center" gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  )
}

