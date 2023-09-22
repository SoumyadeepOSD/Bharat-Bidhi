/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/alt-text */
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Box, Center, Flex, Text, Grid, GridItem } from '@chakra-ui/react'
import Carousel from 'react-bootstrap/Carousel';

const profile = "https://th.bing.com/th/id/R.6f3126be9ee349f7a46e2a82bbec20de?rik=bfhCsHgErnm3Gg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_454260.png&ehk=xqVQbWzyinjqyijKsS7dU3S9zufgjRNk9iSGaog2Yb4%3d&risl=&pid=ImgRaw&r=0";

const notification = "https://image.similarpng.com/very-thumbnail/2020/08/Notification-bell-icon-vector-PNG.png";
const search = "https://th.bing.com/th/id/OIP.5NxYGfy_TA9xwMGvJE0bogHaHa?pid=ImgDet&rs=1";
const communities = "https://static.vecteezy.com/system/resources/previews/000/607/056/original/community-people-care-logo-and-symbols-template-vector.jpg";
const legalaid = "https://i0.wp.com/brollyjameson.co.uk/wp-content/uploads/2018/02/legal-aid-logo.png";
const connect = "https://assets.website-files.com/62b9439f38ce8f1b46fb7600/62bdbe24d1f9f486a312c6a2_Business%20Connections.png";
const Main = () => {
    return(
        <Box background={'whiteAlpha.300'}>
           <Flex flexDirection={'column'} alignItems={'center'}>
            {/* SLider Banner*/}
            <Center>
                <MyCuroselSlider/>
            </Center>
            
            {/* Animation Text */}
            <marquee>
                <Text color={'red'} fontWeight={'bold'} background={'yellow'}>Latest News: Cabinet approved eCourts Phase-III with Financial Outlay of Rs.7210Cr.</Text>
            </marquee>
           
            <Box height={'600px'} width={'95%'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-around'}>
                {/* Left */}
               <Box width={'100%'} height={'100%'}>  
                    <h2>About Department</h2>
                    <Text  >As per the Allocation of Business (Rules), 1961, Department of Justice is a part of Ministry of Law & Justice, Government of India. It is one of the oldest Ministries of the Government of India. Till 31.12.2009, Department of Justice was part of Ministry of Home Affairs and Union Home Secretary had been the Secretary of Department of Justice. Keeping in view the increasing workload and formulating many policies and programmes on Judicial Reforms in the country, a separate Department namely Department of Justice was carved out from MHA and placed under the charge of Secretary to Government of India and it started working as such from 1st January, 2010 under the Ministry of Law & Justice. The Department is housed in the Jaisalmer House, 26, Man Singh Road, New Delhi. The Organizational setup of the Department includes 01 Special Secretary, 03 Joint Secretaries, 07 Directors/ Deputy Secretaries and 08 Under Secretaries. The functions of the Department of Justice include the appointment, resignation and removal of the Chief Justice of India, Judges of the Supreme Court of India, Chief Justices and Judges of the High Courts and their service matters. In addition, the Department implements important schemes for Development of Infrastructure Facilities for Judiciary, setting up of Special Courts for speedy trial and disposal of cases of sensitive nature (Fast Track Special Court for cases of rape and POCSO Act), E-court Project on computerization of various courts across the country, legal aid to poor and access to justice, financial assistance to National Judicial Academy for providing training to the Judicial Officers of the country. The functions of Department of Justice are given in Allocation of Business (Rules), 1961</Text>
               </Box>
               <Box height={'100%'}>
               <h2>What's New</h2>
               <ul width={'33.33%'}>
                    <li>Order of appointment of 07 Additional Judges of Allahabad HC to be Judges of that High Court (22.09.2023)</li>
                    <li>Order of appointment of Smt. Manjusha Ajay Deshpande as an Addl. Judge of Bombay HC (09.08.2023)</li>
                    <li>Order of relinquish of charge by Shri Justice Rohit Baban Deo, Judge, Bombay High Court w.e.f 04.08.2023 (21.09.2023)</li>
                    <li>Order of appointment of Sh. Justice S. Rachaiah, Addl. Judge of Karnataka HC as an Addl. Judge of that High Court for a fresh term of one year w.e.f. 08.11.23 (12.09.23)</li>
                    <li>Order of appointment of 02 Additional Judges of Karnataka HC as Permanent Judges of that High Court (12.09.23)</li>
                    <li>Order of appointment of 05 Additional Judges of Madras HC as Permanent Judges of that High Court (12.09.23)</li>
                    <li>Order of apppointment of Smt. Justice C. Sudha, Addl. Judge, Kerala HC as Permanent Judge of Kerala HC(02.09.23)</li>
                    <li>Order of appointment of Sh. Budi Habung, JO as an Addl. Judge of Gauhati HC (02.09.2023)</li>
                    <li>Order of appointment of Shri S.S. Mishra, Advocate and Sh. Ananda C. Behera, JO as Judges of Orissa HC (02.09.2023)</li>
               </ul>
               </Box>
               {/* Right */}
               <Box width={'33.33%'}height={'100%'} paddingInline={'20px'} alignItems={'center'}>
                    <img src='https://cdnbbsr.s3waas.gov.in/s35d6646aad9bcc0be55b2c82f69750387/uploads/2023/05/2023051977.png' height={'100px'} width={'100px'}/>
                    <Text fontWeight={'bold'} fontSize={'1rem'}>Shri Arjun Ram Meghwal</Text>
                    <Text fontWeight={'bold'} fontSize={'1rem'}>Hon'ble Minister of State, Ministry of Law and Justice (Independent Charge)</Text>
               </Box>
            </Box>
            {/* Tabs */}
           
           
           <Flex flexDirection={'column'}  width={'100%'} height={'500px'}  justifyContent={'space-around'}>
                <Flex flexDirection={'row'} justifyContent={'space-Around'} alignItems={'center'}>
                     <Tabs title="Your Profile" image={profile}/>
                     <Tabs title="Notification" image={notification}/>
                     <Tabs title="Search" image={search}/>
                </Flex>
                <Flex flexDirection={'row'} justifyContent={'space-Around'} alignItems={'center'}>
                     <Tabs title="Communities" image={communities}/>
                     <Tabs title="Legal Aid" image={legalaid}/>
                     <Tabs title="Connect Businesses" image={connect}/>
                </Flex>
            </Flex>
           
           </Flex>
        </Box>
    );
}



const MyCuroselSlider = () =>{
    return (
        <Carousel interval={2000} >
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
  

const Tabs = ({image, title})=>{
    return(
    <Flex background={'gray.300'} height={'100px'} width={'180px'} borderRadius={'10px'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-around'} paddingBlock={'60px'} >
        <img src={image} height={'50px'} width={'50px'} paddingInline={'10px'}/>
        <Text fontWeight={'bold'}>{title}</Text>
    </Flex>
    );
}
export {Main, MyCuroselSlider, Tabs};