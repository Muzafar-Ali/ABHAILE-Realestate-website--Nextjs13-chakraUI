import { useProprtyFormate } from '@/features/common/Hooks/useProprtyFormate'
import TextContentBox from '@/features/common/modules/TextContentBox';
import DefaultLayout from '@/features/Layouts/DefaultLayout';
import PropertyMatterPortEmbed from '@/features/Property/components/PropertyMatterPortEmbed/PropertyMatterPortEmbed';
import PropertyStats from '@/features/Property/components/PropertyStats';
import PropertyThumbnailSlider from '@/features/Property/components/PropertyThumbnailSlider';
import PropertyYoutubeEmbed from '@/features/Property/components/PropertyYoutubeEmbed';
import { Badge, Box, Flex, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'
import { TbMapPin } from 'react-icons/tb';

const PropertySingle = ({property}) => {

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
      externalID,
      photos,
      description,
      coverVideo,
      panorama,
      amenities,
      furnished
    } = useProprtyFormate(property);

  return (
      <DefaultLayout>
        <Box backgroundColor='#f7f8f9' paddingY='3rem'>
          <Grid  
            templateColumns="repeat(6, 1fr)"
            gap="5"
            maxWidth="1280px"
            margin="0 auto"
          >
            <GridItem colSpan="6">
              <Text 
                fontSize='3xl'
                fontWeight='medium'
                color='blue.800'
                textAlign={{base:'center', sm:'left'}}
              >
                {propertyType} {title}
              </Text>
              <Flex 
                fontSize='xl'
                color='blue.600'
                textAlign='center'
                alignItems='center'
                flexDirection={{base:'column', sm:'row'}}
                gap='0.5rem'
                marginY={{base:'1rem', sm:'0'}}
              >
                <TbMapPin/>
                <Text fontWeight='light'>
                  {address} - ID:{externalID}
                </Text>
                <Badge colorScheme='green'>{purpose}</Badge>
              </Flex> 
            </GridItem>
            <GridItem colSpan={{ base: 6, sm: 3}}>
              <PropertyThumbnailSlider photos ={photos}/>
            </GridItem>
            <GridItem colSpan={{base:6, sm:3}}>
              <PropertyStats
                rooms ={rooms}
                bath={baths}
                sqSize ={sqSize}
                price={price}
              />
              <TextContentBox title ="Description">
                <Text
                  fontWeight='light'
                  color='gray.600'
                  fontSize='1rem'
                  noOfLines='4'
                >{description}</Text>
              </TextContentBox>
              <TextContentBox title ="Amenties">
                <SimpleGrid
                  columns={{base: 1, sm: 2}}
                  fontWeight="light"
                  color='gray.600'
                  fontSize=""
                >
                  {
                    amenities.length ? amenities.map((item)=> <Text>{item}</Text>) : "Please contact us for more info"
                  }
                </SimpleGrid>
              </TextContentBox>
            </GridItem>
            <GridItem colSpan={{base: 6, sm: 3}}>
              <TextContentBox title="Video Walkthrough">
                <PropertyYoutubeEmbed coverVideo ={coverVideo}/>
              </TextContentBox>
            </GridItem>
            <GridItem colSpan={{base: 6, sm: 3}}>
              <TextContentBox title="3D Virtual Walkthrough">
              <PropertyMatterPortEmbed panorama ={panorama}/>
              </TextContentBox>
            </GridItem>
          </Grid>
        </Box>
      </DefaultLayout>
  )
}

export default PropertySingle

export async function getServerSideProps(context){
  const property = require('@/features/data/property')
  return{
    props :{ property }
  }
}