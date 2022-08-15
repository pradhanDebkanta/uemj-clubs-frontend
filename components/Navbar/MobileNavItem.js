import React, { useCallback } from 'react';
import NextLink from 'next/link';
import { useRouter } from "next/router";
import { Stack, Flex, Text, Icon, Collapse, Link, useDisclosure, useColorModeValue, border } from '@chakra-ui/react';

import { RiArrowDownSLine } from 'react-icons/ri';


const MobileNavItem = ({ label, children, href, parent }) => {
  const { isOpen, onToggle } = useDisclosure();
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const linkHoverColor = useColorModeValue('#7828C8', '#8A0063');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const router = useRouter();

  const activeRoute = () => {
    if (router.asPath !== '/') {
      if (router.asPath.includes('/features'))
        return '/features';
      else if (router.asPath.includes('/latest-activity'))
        return '/latest-activity';
      else
        return '/clubs';
    }
  };

  // console.log(parent, 'parent');

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      {href ? (
        <>
          <NextLink href={href} key={label} passHref>
            <Link
              py={2}
              _hover={
                {
                  textDecoration: 'none',
                  transform: 'translateX(5px)',
                  transition: 'all 0.3s ease',
                  color: linkHoverColor,

                }}
              color={router.asPath === href ? '#7828C8' : linkColor}
            >
              {label}
            </Link>
          </NextLink>
        </>

      ) : (
        <>
          <Flex
            py={2}
            as={Link}
            href={href ?? '#'}
            justify={'space-between'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Text
              fontWeight={600}
              // color={linkColor}
              color={(activeRoute() === parent) ? '#7828C8' : linkColor}

            >
              {label}
            </Text>
            {children && (
              <Icon
                as={RiArrowDownSLine}
                transition={'all .25s ease-in-out'}
                transform={isOpen ? 'rotate(180deg)' : ''}
                w={6}
                h={6}
              />
            )}
          </Flex>

          <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
            <Stack
              mt={2}
              pl={4}
              borderLeft={1}
              borderStyle={'solid'}
              borderColor={borderColor}
              align={'start'}>
              {/* {console.log(children, 'chi', router.asPath)} */}
              {children &&
                children.map((child) => (
                  <NextLink href={child.href} key={child.label} passHref>
                    <Link
                      py={2}
                      _hover={
                        {
                          textDecoration: 'none',
                          transform: 'translateX(5px)',
                          transition: 'all 0.3s ease',
                          color: linkHoverColor,

                        }}
                      color={router.asPath === child.href ? '#7828C8' : linkColor}
                    >
                      {child.label}
                    </Link>
                  </NextLink>
                ))}
            </Stack>
          </Collapse>
        </>
      )}
    </Stack>
  );
};

export default MobileNavItem