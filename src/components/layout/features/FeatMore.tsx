import { Container, Box, Stack, Typography } from "@mui/material";
import React from "react";

// do not need now
const FeatMore: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: "100vh", mt: 40 }}>
        <Stack direction="column" spacing={2} sx={{ mb: 20 }}>
          <Typography component="h4" variant="h4" sx={{mb: 6}} textAlign={{xs: 'center', sm: 'start'}}>
            More Information
          </Typography>
          <Stack spacing={4}>
            <Typography component="p">
              A health tracking band is a wearable device that can monitor
              various aspects of an individual's health and fitness.
            </Typography>
            <Typography component="p">
              With advanced sensors, it can accurately measure your steps,
              distance, heart rate, and pet's location.
            </Typography>
            <Typography component="p">
              The band's lightweight design and comfortable fit makes it easy to
              wear all day and night.
            </Typography>
            <Typography component="p">
              Keep track of your progress and set goals with the help of
              accompanying apps available on the device.
            </Typography>

            <Typography component="p">
              The device can connect to your smartphone or other device to
              provide real-time data and insights into your activity levels.
            </Typography>

            <Typography component="p">
              A health tracking band is a convenient and stylish way to keep
              track of your fitness and wellness goals.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default FeatMore;
