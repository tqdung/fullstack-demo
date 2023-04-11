import { Box, Container, Flex, Heading, Link, Text, LinkProps } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { ROUTE_PATHS } from '@routes/route-paths';

export const NavLink = ({
    children,
    active,
    ...rest
}: LinkProps & { to: string; active?: boolean }) => (
    <Link
        as={RouterLink}
        ml="50px"
        color="primary.blue"
        fontWeight={active ? 'bold' : undefined}
        position="relative"
        _hover={{
            textDecoration: 'none',
        }}
        _before={{
            content: active ? '""' : undefined,
            position: "absolute",
            top: "43px",
            w: "full",
            border: "1px solid var(--chakra-colors-primary-blue)",
            rounded: "2px 2px 0 0"
        }}
        {...rest}
    >
        {children}
    </Link>
)

export default function Navbar() {
    const { pathname } = useLocation();
    return (
        <Box as="nav" bg="white" p="20px">
            <Container>
                <Flex alignItems="center" justifyContent="space-between" w="full">
                    <Flex alignItems="center">
                        <Box mr="16px">
                            <Box width={100}>Brand Logo</Box>
                        </Box>
                        <Box>
                            <Heading m="0" color="primary.blue">
                                BrandName
                            </Heading>
                        </Box>
                    </Flex>
                    <Flex justifyContent="flex-end" alignItems="center">
                        <NavLink
                            to={ROUTE_PATHS.HOME}
                            active={pathname === ROUTE_PATHS.HOME}
                        >
                            <Text fontWeight="inherit">Home</Text>
                        </NavLink>
                        <NavLink
                            to={ROUTE_PATHS.BLOG}
                            active={pathname === ROUTE_PATHS.BLOG}
                        >
                            <Text fontWeight="inherit">Blog</Text>
                        </NavLink>
                        <NavLink
                            to={ROUTE_PATHS.ABOUT}
                            active={pathname === ROUTE_PATHS.ABOUT}
                        >
                            <Text fontWeight="inherit">About</Text>
                        </NavLink>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}
