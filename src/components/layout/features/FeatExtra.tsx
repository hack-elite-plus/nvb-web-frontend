import { Box, Stack, Typography, Paper } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const extraItems = [
  "Emergency Alerts",
  "Reports",
  "Channeling",
  "Long-lasting battery",
  "Tiny & lightweight",
];

const FeatExtra: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 30 }}>
        <Parallax speed={-10}>
          <Stack
            direction="column"
            alignItems="center"
            textAlign={{ md: "unset", xs: "center" }}
            spacing={2}
            sx={{ mb: 20 }}
          >
            <Typography component="h2" variant="h2">
              More Features
            </Typography>

            <Stack
              spacing={2}
              direction={{ md: "row", xs: "column" }}
              sx={{ pt: 4 }}
            >
              {extraItems.map((item, index) => (
                <Paper key={index} sx={{ p: 3, borderRadius: "10px" }}>
                  <Typography>{item}</Typography>
                </Paper>
              ))}
            </Stack>
          </Stack>
        </Parallax>
      </Box>
    </Container>
  );
};

export default FeatExtra;
