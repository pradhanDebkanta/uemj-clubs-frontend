import React, { } from "react";
import NextLink from 'next/link';
import { useRouter } from "next/router";

import {
    Link,
    Stack,
    Box,
    Text,
    Flex,
    Icon,
    useColorModeValue
} from '@chakra-ui/react';

import { RiCloseLine, RiMenuLine, RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri';


const DesktopSubNav = ({ label, href, subLabel }) => {
    const router = useRouter();

    return (
        <NextLink href={href} passHref>
            <Link
                // href={href}
                role={'group'}
                display={'block'}
                px={2}
                py={2}
                rounded={'md'}
                _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
                color={router.asPath === href && '#7828C8'}
            >
                <Stack direction={'row'} align={'center'}>
                    <Box>
                        <Text
                            transition={'all .3s ease'}
                            _groupHover={{ color: 'pink.400' }}
                            fontWeight={500}>
                            {label}
                        </Text>
                        {subLabel && (
                            <Text fontSize={'sm'}>{subLabel}</Text>
                        )}
                    </Box>
                    <Flex
                        transition={'all .3s ease'}
                        transform={'translateX(-10px)'}
                        opacity={0}
                        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                        justify={'flex-end'}
                        align={'center'}
                        flex={1}>
                        <Icon color={'pink.400'} w={5} h={5} as={RiArrowRightSLine} />
                    </Flex>
                </Stack>
            </Link>
        </NextLink>
    );
};

export default DesktopSubNav;