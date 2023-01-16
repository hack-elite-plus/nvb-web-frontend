/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { css } from "@emotion/react";
import videoBanner from '../../../assets/videos/feat_video_banner.mp4'

const videoStyles = css`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
  object-position: center;
  z-index: -2;
`;

const bannerStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const backdropStyles = css`
  width: 100%;
  height: 80%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
  filter: blur(200px);
`;

const FeatVideoBanner: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Stack
          direction="column"
          spacing={2}
          sx={{ my: 20 }}
          textAlign="center"
        >
          <Typography component="h2" variant="h2">
            Get back on track.
          </Typography>
          <Typography component="p" variant="subtitle1">
            Are you fond of Jogging or Biking?
          </Typography>
        </Stack>
      </Container>
      
      <Box position="relative">
        <Stack direction={{ md: "row", xs: "column" }}>
          <Box width={{ md: "65%" }}>
            <Box
              component="video"
              autoPlay
              muted
              loop
              css={videoStyles}
              sx={{ height: { xs: "500px", md: "100%" } }}
            >
              <source
                src={videoBanner}
                type="video/mp4"
              />
            </Box>
          </Box>
          <Box width={{ md: "35%" }} bgcolor="white" color="#2b2a3d">
            <Stack
              alignItems="center"
              direction="column"
              sx={{ m: 10 }}
              spacing={3}
            >
              <Typography component="h2" variant="h2">
                Specially for you!
              </Typography>
              <Typography component="p" variant="body1" sx={{ maxWidth: 400 }}>
                Plan your route with Nimbus Venture Band. you can plan multi-day
                routes, create personal collections, use worldwide offline maps
                and much more.
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Box
          css={bannerStyles}
          sx={{
            background: {
              md: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0 40%,
          rgb(255, 255, 255) 59%
        );`,
              xs: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, .1) 0 20%,
          rgb(255, 255, 255) 40%
        );`,
            },
          }}
        ></Box>
        <Box
        className="backdrop"
          css={backdropStyles}
          sx={{
            background: {
              md: `linear-gradient(
          to left,
          rgba(0, 0, 0, 0.15) 0 40%,
          rgb(255, 255, 255) 59%
        );`,
              xs: `linear-gradient(
          to top,
          rgba(0, 0, 0, .5) 0 20%,
          rgb(255, 255, 255) 40%
        );`,
            },
          }}
        ></Box>
      </Box>
    </>
  );
};

export default FeatVideoBanner;
