import { FILM_SECTION_ITEM } from "@/anims";
import { Heading, Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <Box>
      <Heading textAlign="center">Contact</Heading>
      <Box
        as={motion.div}
        variants={FILM_SECTION_ITEM}
        whileInView="animate"
        initial="initial"
        pt="5"
      >
        <Image
          src="https://via.placeholder.com/1920x800.webp"
          alt=""
          rounded="2xl"
        />
      </Box>
    </Box>
  );
};

export default ContactSection;
