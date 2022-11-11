import React, { useEffect, useState } from 'react';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../assets/styles/globals.css';
import { useRouter } from 'next/router';
import SANavbar from '../components/SuperAdminNavbar';
import ANavbar from '../components/AdminNavbar';
import Navbar from '../components/Navbar';


// for next-ui provide 
const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      background: '#fff'
    }
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
    initialColorMode: "dark",
    useSystemColorMode: true,
  },

};

export const theme = extendTheme({ ...custom });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    let mode = process.env.NODE_ENV;
    if (mode === 'production') {
      console.log = () => { }
      console.warn = () => { }
    }
    console.warn = () => { }
  }, [])

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
          {
            router?.asPath?.includes('/super-admin') ? (
              <SANavbar />
            ) : router?.asPath.includes('/admin') ? (
              <ANavbar />
            ) : (
              <Navbar />
            )
          }

          <Component {...pageProps} />
        </ChakraProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp
