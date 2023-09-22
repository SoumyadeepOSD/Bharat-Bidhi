import { Flex, Box, Center } from '@chakra-ui/react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


const ashokStambth = "https://th.bing.com/th/id/OIP.x2cxmNsFezpRwMqlhJ1JwgHaIT?pid=ImgDet&rs=1";
const Main = () => {
    return(
        <Box background={'whiteAlpha.300'}>
            <Center>
            <MyCuroselSlider/>
            </Center>
        </Box>
    );
}



const MyCuroselSlider = () =>{
    return (
        <Carousel>
      <Carousel.Item>
      <img  src="https://cdnbbsr.s3waas.gov.in/s35d6646aad9bcc0be55b2c82f69750387/uploads/2023/09/20230918770889072.jpeg" width={'100%'}/>
      </Carousel.Item>


      <Carousel.Item>
      <img src="https://cdnbbsr.s3waas.gov.in/s35d6646aad9bcc0be55b2c82f69750387/uploads/2023/09/202309131361596029.jpeg" width={'100%'}/>
      </Carousel.Item>


      <Carousel.Item>
        <img src="https://cdnbbsr.s3waas.gov.in/s35d6646aad9bcc0be55b2c82f69750387/uploads/2023/08/2023081123.jpeg" width={'100%'}/>
      </Carousel.Item>
    </Carousel>
    );
  }
  
  export {Main, MyCuroselSlider};