import { Container, Flex, Text } from '@chakra-ui/react'

export default function Masthead() {
    return (
        <Flex bg="#F0F0F0" py="5px">
            <Container display="flex" alignItems="center">
                <Text>
                    Website masthead
                </Text>
            </Container>
        </Flex>
    )
}
