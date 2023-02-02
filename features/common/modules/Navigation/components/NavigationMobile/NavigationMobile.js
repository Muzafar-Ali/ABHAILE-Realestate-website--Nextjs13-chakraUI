import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import {HiHomeModern} from "react-icons/hi2"
import { navigationLinks } from '../../navigationConsts'

const NavigationMobile = () => {
    return (
    <Box 
      color="blue.600"
      padding="2rem"
      backgroundColor="white"
      display={{base:"block", md:"none"}}
    >
  
        <Flex alignItems="center" justifyContent='space-between'>
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              <HiHomeModern size="30px"/>
              <Text fontSize="2xl" fontWeight="semibold">ABHAILE</Text>
            </Box>
          </Link>
          <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon/>}  variant="outline"/>
            <MenuList>
              {
                navigationLinks.map((item)=>(
                  <NavigationLink key={item.title} {...item }/>
                  ))
              }
            </MenuList>
          </Menu>
        </Flex>

    </Box>
  )
}

export default NavigationMobile

const NavigationLink = ({link, title, icon})=>{
  return(
    <Link href={link}>
      <MenuItem alignItems="Center" gap="0.5rem">
        {icon}
        {title}
      </MenuItem>
    </Link>
  )
}
