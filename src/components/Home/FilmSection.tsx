import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FILM_SECTION_CONTAINER,
  FILM_SECTION_ITEM,
  HERO_BANNER_ANIMATION,
  PHOTO_SECTION_CONTAINER,
  PHOTO_SECTION_ITEM,
} from "@/anims";

export default function FilmSection() {
  return (
    <Box>
      <Heading textAlign="center">Films</Heading>
      <VStack pt={5} as={motion.div}>
        <Box
          as={motion.div}
          variants={FILM_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <Image
            src="https://via.placeholder.com/1920x800.webp"
            alt=""
            rounded="2xl"
          />
        </Box>
        <Box
          as={motion.div}
          variants={FILM_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <Image
            src="https://via.placeholder.com/1920x800.webp"
            alt=""
            rounded="2xl"
          />
        </Box>
        <Box
          as={motion.div}
          variants={FILM_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <Image
            src="https://via.placeholder.com/1920x800.webp"
            alt=""
            rounded="2xl"
          />
        </Box>
      </VStack>
    </Box>
  );
}
