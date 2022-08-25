import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import '../assets/styles/globals.css';

const Navbar = dynamic(() => import('../components/Navbar'), {
  ssr: false
})




// for next-ui provide 
const lightTheme = createTheme({
  type: 'light',
  theme: {
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '$black'
    }
  },
});

// for chakra ui provider
const custom = {
  config: {
    cssVarPrefix: "dk",
    initialColorMode: "system",
    useSystemColorMode: true,
  },

};

export const theme = extendTheme({ ...custom });

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}

    >
      <NextUIProvider theme={theme}>
        <ChakraProvider >
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp
