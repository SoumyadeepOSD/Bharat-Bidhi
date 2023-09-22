/* eslint-disable jsx-a11y/alt-text */
import { Box, Flex,Text } from "@chakra-ui/react";
import {AiOutlineMenu} from 'react-icons/ai';


const ashokStambth = "https://th.bing.com/th/id/OIP.x2cxmNsFezpRwMqlhJ1JwgHaIT?pid=ImgDet&rs=1";
const g20Summit = "https://cdn.mos.cms.futurecdn.net/LSNfJe7vmuHnXeSqSefycK-1200-80.jpg";
const azzadikaamrit = "https://zeevector.com/wp-content/uploads/Azadi-Ka-Amrit-Mahotsav-Logo-in-Hindi_Download-387x258.png"

const Hero = ()=>{
   ;
    return(
        <Flex flexDirection={'column'} justifyContent={'space-between'}>
        {/* First section */}
        <Box background={'white'} marginInline={'7'} marginBlock={'2'}>
            <Flex flexDirection={'row'} alignItems={'center'} gap={'20px'} justifyContent={'space-between'}>
                
                {/* Left */}
                <Box>
                    <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'space-around'}>
                        <img src={ashokStambth} height={'100px'} width={'100px'}/>
                        <Text color={'black'} fontWeight={'bold'} fontSize={'2rem'}>Bharat विधि</Text>
                    </Flex>
                </Box>

                {/* Right */}
                <Box>
                    <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'space-around'}>
                        <img src={g20Summit} height={'200px'} width={'200px'}/>
                        <img src={azzadikaamrit}height={'200px'} width={'200px'}/>
                    </Flex>
                </Box>

            </Flex>
        </Box>
        {/* Second Section */}
        <Box background={'blue.600'} paddingBlock={'5'}>
            <Flex flexDirection={'row'} justifyContent={'space-between'} marginInline={'20'}>
            <Flex flexDirection={'row'} alignItems={'center'} gap={'3rem'}>
                <Text color={'white'} fontWeight={'bold'}>Home</Text>
                <Text color={'white'} fontWeight={'bold'}>About Us</Text>
                <Text color={'white'} fontWeight={'bold'}>Our Mission</Text>
                <Text color={'white'} fontWeight={'bold'}>eMarket Place</Text>
                <Text color={'white'} fontWeight={'bold'}>Dashboard</Text>
            </Flex>
            <AiOutlineMenu size={'1.5rem'} color="white"/>
            </Flex>
        </Box>
        </Flex>
    );
}



  



export default Hero;




