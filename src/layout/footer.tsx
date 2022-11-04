import { Box, Container, Heading, HStack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Box bgColor={"black"} color="white" py="10">
        <Container maxW="container.xl">
          <Heading>Lorem ipsum</Heading>
          <HStack justify="space-between" alignItems="center">
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto velit saepe odit hic quae magnam laborum fuga!
              Similique, et modi necessitatibus commodi maxime dolores beatae
              blanditiis. Nobis, saepe eaque? Ab?
            </Text>
            <Text textAlign="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              expedita. Dolore esse quas, neque accusamus maiores nisi sint
              obcaecati quae tenetur assumenda rem inventore amet totam, ipsa
              doloremque nihil cum?
            </Text>
          </HStack>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
