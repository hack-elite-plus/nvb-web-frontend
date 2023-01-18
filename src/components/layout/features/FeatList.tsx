import React from "react";
import { Container, Stack, Typography, Box } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import listBanner from "../../../assets/images/feat_list_banner.png";
import Media from "../../utils/Media";

const FeatList: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 20 }}>
      <Stack
        direction="column"
        alignItems="center"
        spacing={2}
        sx={{ mb: 20 }}
        textAlign="center"
      >
        <Typography component="h2" variant="h2">
          Useful features you might like
        </Typography>
        <Typography
          component="p"
          variant="subtitle1"
          maxWidth="50%"
        ></Typography>
      </Stack>

      <Stack
        direction={{ md: "row", xs: "column" }}
        alignItems="center"
        textAlign={{ xs: "center", md: "unset" }}
        spacing={{ xs: 10, md: 3 }}
      >
        <Box width={{ md: "20%" }}>
          <Typography component="h3" variant="h3" sx={{ mb: 4 }}>
            Main Features
          </Typography>
          <Stack spacing={2}>
            <Typography>Location Tracking</Typography>
            <Typography>Real Time Heart rate monitoring</Typography>
            <Typography>Monitor your Body Temperature</Typography>
          </Stack>
        </Box>
        <Box width={{ md: "60%" }}>
          <Parallax speed={10} scale={[0.8, 1.1]}>
            <Media
              src={listBanner}
              alt=""
              sx={{
                width: "100%",
              }}
            ></Media>
          </Parallax>
        </Box>
        <Box width={{ md: "20%" }}>
          <Typography component="h3" variant="h3" sx={{ mb: 4 }}>
            Extra
          </Typography>
          <Stack spacing={2}>
            <Typography component="p">Find your pet's location</Typography>
            <Typography component="p">
              Connect with your personal trainer
            </Typography>
            <Typography component="p">Marketplace</Typography>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default FeatList;
