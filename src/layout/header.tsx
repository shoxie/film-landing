import { Container, HStack } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Container maxW="container.xl" py="5">
        <HStack justify="space-between" alignItems="center">
          <Link href="/">Yam</Link>
          <HStack justify="center" alignItems="center" spacing={10}>
            <span>Home</span>
            <span>Photos</span>
            <span>Teams</span>
            <span>Contact</span>
          </HStack>
        </HStack>
      </Container>
    </header>
  );
};

export default Header;
