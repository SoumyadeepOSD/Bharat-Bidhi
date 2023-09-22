/* eslint-disable jsx-a11y/alt-text */
import { 
    Flex, 
    Text,
    HStack,
    FormControl,
    Select,
    Box
} from '@chakra-ui/react';

const Header = ()=>{
    return(
        <div>
        <Flex background='white' marginInline='7' marginBlock={'5'} justifyContent={'space-between'}>
        {/* left text */}
        <HStack spacing='24px'>
            <div>
                <Flex flexDirection={'column'} alignItems={'end'} >
                    <Text color={'black'} fontWeight={'bold'}>विधि और न्याय मंत्रालय</Text>
                    <Text color={'black'}fontWeight={'bold'}>MINISTRY OF LAW AND JUSTICE</Text>
                </Flex>
           </div>
           <div>
                <Flex flexDirection={'column'} alignItems={'start'} >
                    <Text color={'black'} fontWeight={'bold'}>विधि और न्याय मंत्रालय</Text>
                    <Text color={'black'}fontWeight={'bold'}>MINISTRY OF LAW AND JUSTICE</Text>
                </Flex>
           </div>
        </HStack>
        {/* right text */}
        <div>
            <Flex flexDirection={'row'} alignItems={'center'} gap={'20px'}>
                <Text color={'black'} fontWeight={'bold'}>SKIP TO MAIN CONTENT</Text>
                <img src='https://openclipart.org/image/2400px/svg_to_png/213239/Search-icon.png' height={'20px'} width={'20px'}/>
                 {/* Drop down */}
                <DropdownExample/>
            </Flex>
        </div>
        </Flex>
        </div>
    );
}

function DropdownExample() {
    return (
      <Box>
        <FormControl>
          <Select placeholder="Language">
            <option value="option1">English</option>
            <option value="option2">Hindi</option>
            <option value="option3">Bangla</option>
            <option value="option4">Tamil</option>
          </Select>
        </FormControl>
      </Box>
    );
  }

export {
    Header, 
    DropdownExample
};

