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

export default function PhotosSection() {
  return (
    <Box>
      <Heading textAlign={"center"}>Photos</Heading>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
        }}
        spacing={5}
        pt="5"
        as={motion.div}
      >
        <Box
          rounded="md"
          as={motion.div}
          variants={PHOTO_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <Image
            src="https://via.placeholder.com/800x600.webp"
            alt=""
            rounded="2xl"
          />
        </Box>
        <Box
          rounded="md"
          as={motion.div}
          variants={PHOTO_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <Image
            src="https://via.placeholder.com/800x600.webp"
            alt=""
            rounded="2xl"
          />
        </Box>
        <Box
          rounded="md"
          as={motion.div}
          variants={PHOTO_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <Image
            src="https://via.placeholder.com/800x600.webp"
            alt=""
            rounded="2xl"
          />
        </Box>
        <Box
          rounded="md"
          as={motion.div}
          variants={PHOTO_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <Image
            src="https://via.placeholder.com/800x600.webp"
            alt=""
            rounded="2xl"
          />
        </Box>
        <Box
          rounded="md"
          as={motion.div}
          variants={PHOTO_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <Image
            src="https://via.placeholder.com/800x600.webp"
            alt=""
            rounded="2xl"
          />
        </Box>
        <Box
          rounded="md"
          as={motion.div}
          variants={PHOTO_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <Image
            src="https://via.placeholder.com/800x600.webp"
            alt=""
            rounded="2xl"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
