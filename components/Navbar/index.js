import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
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
import { Button as NextButton, Switch, useTheme, Text, Dropdown, Row, Col } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes'

import { RiCloseLine, RiMenuLine, RiUser6Line, RiBuilding2Line } from 'react-icons/ri';
import { TbUsers } from 'react-icons/tb';
import { IconContext } from 'react-icons';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MyIcon from '../../utils/icon';
import Logo from './Logo';
import { useRouter } from 'next/router';

import UserProfile from './UserProfile';
import { useWindowSize } from '../../utils/customHooks/resizeObserver';

// const UserProfile = dynamic(import('./UserProfile').then(e => e), { ssr: false });

const { UserIcon, SunIcon, MoonIcon } = MyIcon



export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isLogin, setLogin] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const [offsetY, setOffsetY] = useState(0);
  const [dynamoStyle, setDynamoStyle] = useState({});
  const [debounceStyle, setDebounceStyle] = useState(dynamoStyle);

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'white');
  const border = useColorModeValue('gray.200', 'gray.900');
  const logoColor = useColorModeValue('gray.800', 'white');
  const breakPoint = useBreakpointValue({ base: 'center', md: 'left' });

  // prevending rerender each the scrolling time use a state of component 
  const [comp, setComp] = useState('');
  const windowSize = useWindowSize();

  // console.log("next theme", isDark);

  const router = useRouter();


  const scrolling = useCallback(e => {
    let currScroll = e.currentTarget.scrollY;
    // console.log(currScroll, 'scrolling',offsetY);
    if (offsetY > currScroll) {
      // console.log('scroll up');
      setDynamoStyle({
        position: 'sticky',
        top: 0,
        zIndex: 999,
      });
    } else {
      // console.log('scroll down');
      setDynamoStyle({});
    }
    setOffsetY(currScroll);

  }, [offsetY]);

  useEffect(() => {
    window?.addEventListener('scroll', scrolling, { passive: true })
    return () => window?.removeEventListener('scroll', scrolling)
  }, [offsetY, scrolling]);

  const onSelectNavClose = useCallback(() => {
    // console.log('parent toggle invoked');
    onToggle();
  }, [onToggle]);

  const routerHandler = e => {
    console.log(e);
    if (e === 'user')
      router.push('/sign-in');
    else if (e === 'admin')
      router.push('/admin/signin')
    else if (e === 'administrator')
      router.push('/super-admin/signin');
    else
      return
  }

  useEffect(() => {
    if (JSON.stringify(dynamoStyle) !== JSON.stringify(debounceStyle)) {
      // console.log('actual style change');
      setDebounceStyle(dynamoStyle);
    }
  }, [dynamoStyle])

  useEffect(() => {
    // console.log('inside effect');
    let element = (
      <Box
        style={dynamoStyle}
        boxShadow={isDark ? 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset' : 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}
      >
        <Flex
          bg={bgColor}
          color={textColor}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={border}
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
              textAlign={breakPoint}
              fontFamily={'heading'}
              color={logoColor}
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

            {windowSize > 425 && (
              <Switch
                checked={isDark}
                size="xs"
                color={'secondary'}
                iconOn={<SunIcon filled style={{ color: '#F8C572' }} />}
                iconOff={<MoonIcon filled style={{ color: '#FF6BD5' }} />}
                preventDefault
                css={{
                  // marginRight: 12,
                  marginTop: 4

                }}
                onChange={(e) => {
                  setTheme(e.target.checked ? 'dark' : 'light');
                  toggleColorMode();
                }}
              />
            )}

            {isLogin ? (
              <div>
                <UserProfile />
              </div>
            ) : (
              <>
                <Dropdown
                >
                  <Dropdown.Button
                    color="secondary"
                    size={'sm'}
                    icon={<UserIcon fill="currentColor" width={16} />}
                    flat
                    auto
                  >
                    Sign In
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Static Actions"
                    onAction={(e) => { routerHandler(e) }}
                  >
                    <Dropdown.Item
                      key="user"
                      icon={
                        <IconContext.Provider value={{ size: 16, color: '#9750DD' }}>
                          <RiUser6Line />
                        </IconContext.Provider>
                      }
                      color='secondary'
                    >
                      Member
                    </Dropdown.Item>
                    <Dropdown.Item
                      key="admin"
                      icon={
                        <IconContext.Provider value={{ size: 16, color: '#9750DD' }}>
                          <TbUsers />
                        </IconContext.Provider>
                      }
                      color='secondary'
                    >
                      Co-ordinator
                    </Dropdown.Item>
                    <Dropdown.Item
                      key="administrator"
                      icon={
                        <IconContext.Provider value={{ size: 16, color: '#A66908' }}>
                          <RiBuilding2Line />
                        </IconContext.Provider>
                      }
                      color='warning'
                    >
                      Administrator
                    </Dropdown.Item>
                    {windowSize <= 425 && (
                      <Dropdown.Item
                        key="changeTheme"
                        color='secondery'
                        withDivider
                        icon={
                          <>
                            {isDark ? (<MoonIcon filled style={{ color: '#FF6BD5' }} size={15} />)
                              : (
                                <SunIcon filled style={{ color: '#F8C572' }} size={15} />
                              )}
                          </>
                        }
                      >
                        <Row>
                          <Col span={10}>
                            <Text
                              color='secondary'
                            >
                              Change Theme
                            </Text>

                          </Col>
                          <Col span={2}>
                            <Switch
                              checked={isDark}
                              size="xs"
                              color={'secondary'}
                              iconOn={<SunIcon filled style={{ color: '#F8C572' }} />}
                              iconOff={<MoonIcon filled style={{ color: '#FF6BD5' }} />}
                              preventDefault
                              css={{
                                // marginRight: 12,
                                marginTop: 4

                              }}
                              onChange={(e) => {
                                setTheme(e.target.checked ? 'dark' : 'light');
                                toggleColorMode();
                              }}
                            />
                          </Col>
                        </Row>

                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </>
            )}
          </Stack>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav
            onSelectNavClose={onSelectNavClose}
          />
        </Collapse>
      </Box >
    );

    setComp(element);

  }, [debounceStyle, bgColor, textColor, border, logoColor, breakPoint, isDark, isOpen, isLogin, windowSize])

  return (

    <>
      {comp}
    </>
  );
}