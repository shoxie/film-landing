import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import CustomImage from "@/components/CustomImage";
import { motion } from "framer-motion";
import {
  FILM_SECTION_CONTAINER,
  FILM_SECTION_ITEM,
  HERO_BANNER_ANIMATION,
  PHOTO_SECTION_CONTAINER,
  PHOTO_SECTION_ITEM,
} from "@/anims";
import PhotosSection from "@/components/Home/PhotosSection";
import FilmSection from "@/components/Home/FilmSection";
import ContactSection from "@/components/Home/Contact";
import TeamSection from "@/components/Home/TeamSection";

const Home = () => {
  return (
    <>
      <Box
        as={motion.div}
        variants={HERO_BANNER_ANIMATION}
        whileInView="animate"
        w="full"
        h="100vh"
        position="relative"
      >
        <CustomImage
          src="https://via.placeholder.com/1920x1080.webp"
          w={1920}
          h={1080}
        />
      </Box>
      <Container maxW="container.xl" py="10">
        <VStack spacing={10}>
          <PhotosSection />
          <FilmSection />
          <ContactSection />
          <TeamSection />
        </VStack>
      </Container>
    </>
  );
};

export default Home;
