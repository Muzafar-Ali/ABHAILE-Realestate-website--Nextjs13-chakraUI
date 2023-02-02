
import {Box, Button, Checkbox, Flex, FormControl, Input, Text } from '@chakra-ui/react';
import React from 'react'
import { useForm } from 'react-hook-form'

const HeroForm = () => {
  const {register, handleSubmit, formState:{errors}} = useForm();
  
  const onSubmit = (data) => console.log(data);

  return (
    <Box 
      width='100%'
      padding="2rem"
      borderRadius="sm"
      backgroundColor="white"
      color="gray.700"
    >
      <Text fontSize="xl" fontWeight="bold"> Free PDF Guide </Text>
      <Text fontSize="lg" > complete the form below to download your guide </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input

            marginTop='1.3rem' 
            id='email' 
            type='email' 
            placeholder='Email' 
            {...register("email", {required:true})}
          />
            {
              errors.email && <Text fontSize="xs" color="red.400">{errors.email.type}</Text>
            }
          <Flex 
            gap={{base:'0.25rem', sm:'1rem'}}
            flexDirection={{base:'column', sm:'row'}}
          >    
            <Input
              marginTop='1.3rem' 
              id='name' 
              type='text' 
              placeholder='Name' 
                {...register("name", {required:true})}
            />
              {
                errors.name && <Text fontSize="xs" color="red.400">{errors.name.type}</Text>
              }
            <Input
              marginTop='1.3rem' 
              id='phone' 
              type='tel' 
              placeholder='Phone' 
              {...register("phone", {required:true})}
            />
              {
                errors.name && <Text fontSize="xs" color="red.400">{errors.name.type}</Text>
              }
          </Flex>
            <Checkbox mt='1.3rem' id='gdpr' type='checkbox' placeholder='GDPR' {...register('gdpr',{required:true})}>
              I consent to having this website store my submitted info
            </Checkbox>
            { errors.gdpr && <Text fontSize='xs' color='red.400'>{errors.gdpr.type}</Text>}
        </FormControl>
        <Button
          type='submit' 
          colorScheme='blue' 
          width='100%' 
          mt="2rem" 
          color='white'
          fontSize='xl'
          padding='2rem'
        >
            Download Now
        </Button>
      </form>
    </Box>
  )
}

export default HeroForm