import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
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

export default function TeamSection() {
  return (
    <Box>
      <Heading textAlign={"center"}>Team</Heading>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
        }}
        spacing={5}
        spacingY={10}
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
          <HStack alignItems="center" spacing={5}>
            <Image
              src="https://via.placeholder.com/150x150.webp"
              alt=""
              rounded="full"
            />
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                Lorem name
              </Text>
              <Text fontSize="md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                laboriosam quis sequi incidunt suscipit esse quia voluptas nulla
                molestiae labore, pariatur ratione id provident. Exercitationem
                reiciendis deleniti labore enim libero.
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box
          rounded="md"
          as={motion.div}
          variants={PHOTO_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <HStack alignItems="center" spacing={5}>
            <Image
              src="https://via.placeholder.com/150x150.webp"
              alt=""
              rounded="full"
            />
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                Lorem name
              </Text>
              <Text fontSize="md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                laboriosam quis sequi incidunt suscipit esse quia voluptas nulla
                molestiae labore, pariatur ratione id provident. Exercitationem
                reiciendis deleniti labore enim libero.
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box
          rounded="md"
          as={motion.div}
          variants={PHOTO_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <HStack alignItems="center" spacing={5}>
            <Image
              src="https://via.placeholder.com/150x150.webp"
              alt=""
              rounded="full"
            />
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                Lorem name
              </Text>
              <Text fontSize="md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                laboriosam quis sequi incidunt suscipit esse quia voluptas nulla
                molestiae labore, pariatur ratione id provident. Exercitationem
                reiciendis deleniti labore enim libero.
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box
          rounded="md"
          as={motion.div}
          variants={PHOTO_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <HStack alignItems="center" spacing={5}>
            <Image
              src="https://via.placeholder.com/150x150.webp"
              alt=""
              rounded="full"
            />
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                Lorem name
              </Text>
              <Text fontSize="md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                laboriosam quis sequi incidunt suscipit esse quia voluptas nulla
                molestiae labore, pariatur ratione id provident. Exercitationem
                reiciendis deleniti labore enim libero.
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box
          rounded="md"
          as={motion.div}
          variants={PHOTO_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <HStack alignItems="center" spacing={5}>
            <Image
              src="https://via.placeholder.com/150x150.webp"
              alt=""
              rounded="full"
            />
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                Lorem name
              </Text>
              <Text fontSize="md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                laboriosam quis sequi incidunt suscipit esse quia voluptas nulla
                molestiae labore, pariatur ratione id provident. Exercitationem
                reiciendis deleniti labore enim libero.
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box
          rounded="md"
          as={motion.div}
          variants={PHOTO_SECTION_ITEM}
          whileInView="animate"
          initial="initial"
        >
          <HStack alignItems="center" spacing={5}>
            <Image
              src="https://via.placeholder.com/150x150.webp"
              alt=""
              rounded="full"
            />
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                Lorem name
              </Text>
              <Text fontSize="md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                laboriosam quis sequi incidunt suscipit esse quia voluptas nulla
                molestiae labore, pariatur ratione id provident. Exercitationem
                reiciendis deleniti labore enim libero.
              </Text>
            </Box>
          </HStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
