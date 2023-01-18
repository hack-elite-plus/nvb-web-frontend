/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import Media from "../../utils/Media";
import petBanner from "../../../assets/images/feat_pet_banner.png";
import Lamp from "../../utils/Lamp";

const FeatPet: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 20 }}>
      <Stack
        direction={{ md: "row", xs: "column-reverse" }}
        spacing={2}
        alignItems="center"
        textAlign={{ xs: "center", md: "unset" }}
      >
        <Box width={{ md: "55%" }}>
          <Parallax speed={10}>
            <Media
              src={petBanner}
              alt="A photo of a happy healthy dog."
              saturate={false}
              sx={{
                width: "180%",
              }}
            >
              <Lamp radius="230px" color="#c08e73" blur="250px" />
            </Media>
          </Parallax>
        </Box>
        <Box width={{ md: "45%" }}>
          <Parallax speed={-5}>
            <Stack direction="column" sx={{ my: "25%", mx: "10%" }} spacing={3}>
              <Typography component="h2" variant="h2" color="#ffbe00">
                Never lose your buddy
              </Typography>
              <Typography component="h3" variant="subtitle1">
                we believe that pets and their owners have a special bond.
                strengthen that bond by always knowing the exact location of
                your furry friends, directly on your smartphone.
              </Typography>
              <Typography component="p" variant="body1" sx={{ maxWidth: 600 }}>
                Get alerts sent to your phone immediately if your dog ever gets
                out unexpectedly. Also you can always see your pet's location
                history.
              </Typography>
            </Stack>
          </Parallax>
        </Box>
      </Stack>
    </Container>
  );
};

export default FeatPet;
