import React, { useCallback } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
    Box,
    Link,
    useColorModeValue,
    Stack,
    Popover,
    PopoverTrigger,
    PopoverContent,

} from '@chakra-ui/react';
import DesktopSubNav from "./DesktopSubNav";
import { NavItems } from "./NavItems";


const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    const router = useRouter();
    // console.log(router);

    const activeRoute = useCallback(() => {
        if (router.asPath !== '/') {
            if (router.asPath.includes('/features'))
                return '/features';
            else if (router.asPath.includes('/latest-activity'))
                return '/latest-activity';
            else
                return '/clubs';
        }
    }, [router]);

    return (
        <Stack direction={'row'} spacing={4}>
            {NavItems?.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            {navItem?.href ? (
                                <NextLink href={navItem.href} passHref>
                                    <Link
                                        p={2}
                                        fontSize={'sm'}
                                        fontWeight={500}
                                        color={router.asPath === navItem.href ? '#7828C8' : linkColor}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: linkHoverColor,
                                        }}
                                    >
                                        {navItem.label}
                                    </Link>
                                </NextLink>
                            ) : (
                                <Link
                                    href={navItem.href ?? '#'}
                                    p={2}
                                    fontSize={'sm'}
                                    fontWeight={500}
                                    color={(activeRoute() === navItem?.parent) ? '#7828C8' : linkColor}
                                    _hover={{
                                        textDecoration: 'none',
                                        color: linkHoverColor,
                                    }}
                                >
                                    {navItem.label}
                                </Link>
                            )}

                        </PopoverTrigger>

                        {navItem?.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                py={0}
                                px={1}
                                rounded={'xl'}
                                minW={'sm'}
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

export default DesktopNav;