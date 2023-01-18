import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import Media from "../../utils/Media";
import gpsBanner from "../../../assets/images/feat_gps_banner.png";

const FeatGPS: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        direction={{ md: "row", xs: "column" }}
        alignItems="center"
        sx={{ my: 20 }}
      >
        <Box width={{ md: "50%" }}>
          <Parallax speed={-15}>
            <Stack direction="column" sx={{ p: 2, m: 3, mt: 25 }} spacing={3}>
              <Typography component="h2" variant="h2">
                Real-time GPS tracking when you need it the most
              </Typography>
              <Typography component="h3" variant="subtitle1"></Typography>
              <Typography component="p" variant="body1">
                A GPS tracking band is a wearable device that uses GPS to track
                location and movements. It can connect to a smartphone for
                real-time location data and alerts. It's useful for personal
                safety, fitness tracking, and tracking children or elderly.
                Available in various designs and features.
              </Typography>
            </Stack>
          </Parallax>
        </Box>
        <Box width={{ md: "50%" }}>
          <Parallax speed={10}>
            <Media
              src={gpsBanner}
              alt="A photo of GPS Location"
              sx={{
                width: "130%",
                top: "100px",
              }}
            />
          </Parallax>
        </Box>
      </Stack>
    </Container>
  );
};

export default FeatGPS;
