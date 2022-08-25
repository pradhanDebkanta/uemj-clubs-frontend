import React, { memo } from "react";
import { Stack, useColorModeValue } from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItem";
import { NavItems } from "./NavItems";

const MobileNav = ({ onSelectNavClose }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NavItems?.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          {...navItem}
          onSelectNavClose={onSelectNavClose}
        />
      ))}
    </Stack>
  );
};

export default memo(MobileNav);