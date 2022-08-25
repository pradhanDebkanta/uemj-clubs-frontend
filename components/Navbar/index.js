import React, { useState, useEffect, useCallback } from 'react';
import NextLink from 'next/link';
import dynamic from 'next/dynamic'

import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  Stack,
  Collapse,
  useColorMode,
} from '@chakra-ui/react';
import { Button as NextButton, Switch, useTheme, } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes'

import { RiCloseLine, RiMenuLine, } from 'react-icons/ri';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MyIcon from '../../utils/icon';
import Logo from './Logo';


const UserProfile = dynamic(import('./UserProfile').then(e => e), { ssr: false });

const { UserIcon, SunIcon, MoonIcon } = MyIcon

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isLogin, setLogin] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const [offsetY, setOffsetY] = useState(0);
  const [dynamoStyle, setDynamoStyle] = useState({});

  const scrolling = useCallback(e => {
    let currScroll = e.currentTarget.scrollY;

    // console.log(currScroll, 'scrolling',offsetY);
    if (offsetY > currScroll) {
      // console.log('scroll up');
      setDynamoStyle({
        position: 'sticky',
        top: 0,
        zIndex: 999,
      })
    } else {
      // console.log('scroll down');
      setDynamoStyle({})
    }
    setOffsetY(currScroll);

  }, [offsetY]);

  useEffect(() => {

    window?.addEventListener('scroll', scrolling, { passive: true })

    return () => window?.removeEventListener('scroll', scrolling)
  }, [offsetY])

  return (
    <Box
      style={dynamoStyle}
      boxShadow={isDark ? 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset' : 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}
    >
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <RiCloseLine w={3} h={3} /> : <RiMenuLine w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Flex
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            <Logo />
          </Flex>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={4}
        >

          <Switch
            checked={true}
            size="sm"
            color={'secondary'}
            // bordered={true}
            iconOn={<SunIcon filled style={{ color: '#F8C572' }} />}
            iconOff={<MoonIcon filled style={{ color: '#FF6BD5' }} />}
            preventDefault
            shadow
            css={{
              // marginRight: 12,
              marginTop: 6

            }}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
              toggleColorMode();
            }}
          />

          {isLogin ? (
            <div>
              <UserProfile />
            </div>
          ) : (
            <NextLink href={'/sign-in'}>
              <NextButton
                icon={<UserIcon fill="currentColor" width={16} />}
                color="secondary"
                size={'sm'}
                flat
                auto
              >
                Sign In
              </NextButton>
            </NextLink>
          )}
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}