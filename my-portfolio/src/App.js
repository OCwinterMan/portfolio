import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Icon,
  Card,
  SimpleGrid,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Divider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import{FcAbout} from 'react-icons/fc';
import{IoIosSchool} from 'react-icons/io';
import{GiDiamondRing} from 'react-icons/gi';
import{FaChild} from 'react-icons/fa';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
          <Image
              borderRadius='full'
              boxSize='300px'
              objectFit="cover"
              src='https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg'
              alt='Dan Abramov'
          />
          <Text fontFamily={"Saira Extra Condensed"} fontSize ="xx-large" fontWeight={"bold"}>Hello, Obama president here </Text>

          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' >
                    <Icon as={FcAbout} mr="8px"/>
                    About me!
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              I served as the 44th President of the <br/>
              United States. My story is the American story — <br/>
              values from the heartland, a middle-class <br/>
              upbringing in a strong family, hard work and <br/> 
              education as the means of getting ahead, and the <br/> 
              conviction that a life so blessed should be lived<br/> 
              in service to others.


              </AccordionPanel>
            </AccordionItem>
          </Accordion>



          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px 1fr))'>
            <Card>
              <CardHeader>
                <Heading size='lg'> <Icon as={IoIosSchool} mr="8px"/> College</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                I attended Occidental College in suburban Los Angeles for two years<br/>
                before transferring to Columbia University in New York City<br/>
                where in 1983 I received a bachelor's degree in political science.<br/>
                Then I attended Harvard University's law school, graduating magna cum laude in 1991.</Text>
              </CardBody>
            </Card>

            <Divider />

            <Card>
              <CardHeader>
                <Heading size='lg'> <Icon as={GiDiamondRing} mr="8px"/> Wife</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                I met Chicago native Michelle Robinson while he was working as<br/>
                a summer associate in 1989 at the Chicago law firm of Sidley Austin.<br/>
                At the time, Robinson was a young lawyer at the firm.</Text>
              </CardBody>
            </Card>

            <Divider />

            <Card>
              <CardHeader>
                <Heading size='lg'> <Icon as={FaChild} mr="8px"/> Early Life</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                I spent my first few years in Hawaii before moving <br/>
                 to Jakarta to live with my half sister, my mother, and my stepfather. <br/> 
                 After spending several years in Jakarta, I returned to Hawaii in 1971, <br/>
                 and remained there through my graduation in 1979 from Punahou School, <br/> an elite college preparatory academy in Honolulu.</Text>
              </CardBody>
              <CardFooter>
                
              </CardFooter>
            </Card>
          </SimpleGrid>


          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
