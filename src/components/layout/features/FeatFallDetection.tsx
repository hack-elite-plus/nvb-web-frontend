import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import bicycleRiderBanner from "../../../assets/images/feat_fall_detection_banner.gif";
import Media from "../../utils/Media";

const FeatFallDetection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#EB1D36",
        overflow: "hidden",
        my: 5,
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ md: "row", xs: "column" }} alignItems="center">
          <Box width={{ md: "50%" }}>
            <Parallax speed={-5}>
              <Stack
                direction="column"
                sx={{ my: "25%" }}
                spacing={3}
                color="#fff"
              >
                <Typography
                  component="h2"
                  variant="h2"
                  textAlign={{ md: "unset", xs: "center" }}
                >
                  Detect Falls
                </Typography>
                <Typography component="h3" variant="subtitle1">
                  Get immediate help even if you're unable to push the button
                  with our advanced fall detection technology. Nimbus Venture
                  Band will automatically sends text notifications to family,
                  friends and emergency contacts of your choosing as soon as a
                  fall is detected.
                </Typography>
                <Typography
                  component="p"
                  variant="body1"
                  sx={{ maxWidth: 600 }}
                >
                  FALLING IS THE LEADING CAUSE OF ACCIDENTAL DEATHS FOR PEOPLE
                  OVER THE AGE OF 65. EVEN SMALL STUMBLES CAN LEAD TO SERIOUS
                  INJURIES.
                </Typography>
                <Typography>Source: CDC</Typography>
              </Stack>
            </Parallax>
          </Box>
          <Box width={{ md: "50%" }}>
            <Parallax translateX={["100%", "-100%"]} translateY={[0, 0]}>
              <Media
                src={bicycleRiderBanner}
                alt="A photo of a bicycle rider."
                sx={{ width: { xs: "120%", md: "130%" }}}
              />
            </Parallax>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default FeatFallDetection;
