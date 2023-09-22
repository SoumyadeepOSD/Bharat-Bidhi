import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import Hero from './components/hero.js';
import { Main } from './components/main.js';

const App = () => {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <ChakraProvider>
        <Header />
        <Hero />
        <Main />
        <Footer />
        <div
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <img
          src='https://static.vecteezy.com/system/resources/previews/001/545/992/original/indian-woman-s-face-avatar-free-vector.jpg'
          height={'100px'}
          width={'100px'}
          borderRadius={'100px'}
          alt="Sticky Image"
        />
      </div>

      </ChakraProvider>
      
    </div>
  );
}

export default App;
