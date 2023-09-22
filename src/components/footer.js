/* eslint-disable jsx-a11y/alt-text */
import {Box, Flex, Text} from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';

const logo1 = "https://cdnbbsr.s3waas.gov.in/s35d6646aad9bcc0be55b2c82f69750387/uploads/bfi_thumb/2019052222-pbg4yfykt1ws3wesk2e72qrx16pvhgliyhns4ln6js.png";
const logo2 = "https://awards.gov.in/Content/images/g20-logo.png";
const logo3 = "https://cdnbbsr.s3waas.gov.in/s35d6646aad9bcc0be55b2c82f69750387/uploads/bfi_thumb/2019032217-pbg4ynhabq72os3vc5n7movls9ot71fdnivnytc160.png";
const logo4 = "https://cdnbbsr.s3waas.gov.in/s35d6646aad9bcc0be55b2c82f69750387/uploads/bfi_thumb/2019041050-pbg4yis3dk0n2qap3lm2s82atcbz4jwpyvm8kfj014.png";
const logo5 = "https://cdnbbsr.s3waas.gov.in/s35d6646aad9bcc0be55b2c82f69750387/uploads/bfi_thumb/2023062719-q8kt1gkmm5c63scixgxrphb60r09yrjv6b3wjgaxuw.png";
const logo6 = "https://cdnbbsr.s3waas.gov.in/s35d6646aad9bcc0be55b2c82f69750387/uploads/bfi_thumb/2019052265-pbg4yfykt1ws3wesk2e72qrx16pvhgliyhns4ln6js.png";
const nic = "https://doj.gov.in/wp-content/themes/sdo-theme/images/nicLogo.png";
const digitalIndia = "https://doj.gov.in/wp-content/themes/sdo-theme/images/digitalIndia.png";
const swaas = "https://doj.gov.in/wp-content/themes/sdo-theme/images/s3waas.png";

const Footer = ()=>{
    return(
        <Flex background={'black'} width={'100%'} height={'300px'} flexDirection={'column'} alignItems={'center'}> 
           <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
           <img  src={logo1} width={'100%'}/>
           <img  src={logo2} width={'180px'}/>
           <img  src={logo3} width={'100%'}/>
           <img  src={logo4} width={'100%'}/>
           <img  src={logo5} width={'100%'}/>
           <img  src={logo6} width={'100%'}/>
           </Flex>
           <br/>
           <br/>
           <hr style={{color: 'white', height: '4px'}}/>
           <Flex flexDirection={'row'} alignItems={'center'}  gap={'30px'}>
                <img src={swaas} height={'150px'} width={'150px'}/>
                <img src={nic} height={'150px'} width={'150px'}/>
                <img src={digitalIndia} height={'150px'} width={'150px'}/>
            </Flex>
        </Flex>
    );
}


const FooterCuroselSlider = () =>{
    return (
        <Carousel interval={2000} width={'100%'}>
      <Carousel.Item>
      <img  src={logo1} width={'100%'}/>
      </Carousel.Item>


      <Carousel.Item>
      <img  src={logo3} width={'100%'}/>
      </Carousel.Item>

      <Carousel.Item>
      <img  src={logo4} width={'100%'}/>
      </Carousel.Item>


      <Carousel.Item>
      <img  src={logo5} width={'100%'}/>
      </Carousel.Item>

      
      <Carousel.Item>
      <img  src={logo6} width={'100%'}/>
      </Carousel.Item>
     
    </Carousel>
    );
  }



  export {Footer, FooterCuroselSlider};