import { ChakraProvider } from '@chakra-ui/react'
import {Header} from './components/header.js';
import Footer from './components/footer.js';
import Hero from './components/hero.js';
import {Main} from './components/main.js';

const App=() =>{
  return (
    <div className="App">
      <ChakraProvider>
      <Header/>
      <Hero/>
      <Main/>
      <Footer/>
      </ChakraProvider>
    </div>
  );
}

export default App;


