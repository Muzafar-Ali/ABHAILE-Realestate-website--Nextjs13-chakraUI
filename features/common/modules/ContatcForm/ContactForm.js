import { Box, FormControl, Input, Textarea, Text, Checkbox, Button } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const {register, handleSubmit, formState:{errors}} = useForm();
  const onSubmit = (data) => console.log("Inside COntactFomr ",data)
  return (
    <Box
        width='100%'
        borderRadius="sm"
        backgroundColor='white'
        color="gray.700"
    >
        <fomr onSubmit ={handleSubmit(onSubmit)}>

            <FormControl>
                <Input
                    marginTop='1.3rem'
                    type='text'
                    placeholder='Name'
                    id='name'
                    {...register("name", {required:true})}
                    />
                <Input
                    marginTop='1.3rem'
                    type='text'
                    placeholder='Email'
                    id='email'
                    {...register("email", {required:true})}
                    />
                <Input
                    marginTop='1.3rem'
                    type='text'
                    placeholder='Phone'
                    id='phone'
                    {...register("phone", {required:true})}
                    />
                <Textarea
                    marginTop="1.3rem"
                    id="message"
                    type="textarea"
                    placeholder="Message"
                    {...register("message", {required:true})}
                    />
                <Checkbox
                    marginTop="1.3rem"
                    id='gdpr'
                    type='checkbox'
                    placeholder='GDPR'
                    {...register("gdpr", {required: true})}
                >
                    <Text fontSize="0.8rem" color="gray.500">
                        I consent to having this website store my details for future communication.
                    </Text>
                </Checkbox>
            </FormControl>
            <Button
                type="submit"
                colorScheme="blue"
                fontSize="xl"
                padding="2rem"
                marginTop="2rem"
                >
                Send Message
            </Button>
        </fomr>

    </Box>
  )
}

export default ContactForm