import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import HeadingImage from "@/assets/The Dragon News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box classNam="w-full mt-5">
      <Container>
        <Image
          src={HeadingImage}
          width={500}
          height={500}
          alt="heading-image"
          className="mx-auto mt-5"
        />
        <Typography
          color="gray"
          variant="body2"
          textAlign="center"
          className="my-2"
        >
          Journalism Without Fear and Favour
        </Typography>
        <Typography color="gray" textAlign="center">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
