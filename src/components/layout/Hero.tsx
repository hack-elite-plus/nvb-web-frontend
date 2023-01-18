import React from "react";
import { Stack, Typography, Container, Box, Button } from "@mui/material";
import heroBanner from "../../assets/images/hero_banner.png";
import { Parallax } from "react-scroll-parallax";
import Media from "../utils/Media";
import Lamp from "../utils/Lamp";

const Hero: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1, position: "relative" }}>
      <Stack
        direction={{ md: "row", xs: "column-reverse" }}
        justifyContent={{ xs: "center" }}
        alignItems={{ xs: "center" }}
      >
        <Box width={{ md: "35%" }}>
          <Parallax speed={10} rotate={[-30, 30]}>
            <Box>
              <Media
                src={heroBanner}
                alt="A photo of nimbus venture band"
                saturate
                sx={{ width: { xs: "80%", md: "100%" }, top: { md: 100 } }}
              >
                <Lamp radius="200px" color="#7f4cf7" />
              </Media>
            </Box>
          </Parallax>
        </Box>

        <Stack
          justifyContent="center"
          alignItems="center"
          direction="column"
          width={{ md: "65%" }}
          sx={{
            mt: 10,
          }}
        >
          <Typography component="h2" variant="h2" sx={{ ml: { xs: 2, lg: 0 } }}>
            <Box
              fontWeight={500}
              textTransform="uppercase"
              display="inline-block"
            >
              Nimbus Venture&nbsp;
            </Box>
            Band
          </Typography>

          <Typography component="p" sx={{ mt: 1, maxWidth: "90%" }}>
            Body Temperature and Heart Beat tracker, Fall detection and Monitors
            heart rate in real-time
          </Typography>

          <Typography component="h6" variant="h6" sx={{ mt: 5 }}>
            Let the Journey begin!
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2 }}
          >
            <Button variant="contained" size="medium">
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hero;
