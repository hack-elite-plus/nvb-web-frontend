import { Box, Container, Link, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Media from "../utils/Media";
import logo from "../../assets/images/logo.png";

const nimbusFooterLinks: [string, [string, string][]][] = [
  [
    "Products",
    [
      [
        "Fleet Management System",
        "https://nimbusventure.com/index.php/fleet-management-system/",
      ],
      [
        "Transport Management System",
        "https://nimbusventure.com/index.php/transport-management-system/",
      ],
      ["MyCar", "https://nimbusventure.com/index.php/mycar-2/"],
      [
        "Nimbus GPS Device",
        "https://nimbusventure.com/index.php/nimbus-gps-device/",
      ],
    ],
  ],
  [
    "Solutions",
    [
      [
        "Logistic Management",
        "https://nimbusventure.com/index.php/logistics-management/",
      ],
      [
        "Construction and Heavy Vehicles",
        "https://nimbusventure.com/index.php/construction-and-heavy-vehicles/",
      ],
      [
        "Retail Distribution",
        "https://nimbusventure.com/index.php/retail-distribution/",
      ],
      [
        "Courier and Delivery service",
        "https://nimbusventure.com/index.php/courier-and-delivery-service/",
      ],
    ],
  ],
];

const Footer: React.FC = () => (
  <footer>
    <Paper elevation={2}>
      <Container maxWidth="lg" sx={{ pt: 12 }}>
        <Stack direction="column">
          <Stack
            spacing={{sm: 0, xs: 6}}
            justifyContent="space-around"
            direction={{ md: "row", xs: "column" }}
            sx={{ mb: 10, ml: {xs: 4, sm: 0}}}
          >
            <Link
              href="https://nimbusventure.com/"
              target="_blank"
              rel="noopener"
            >
              <Media src={logo} alt="" sx={{ width: "200px", left: 0, mb: {xs: 10, sm: 0} }}></Media>
            </Link>

            {nimbusFooterLinks.map((item, index) => (
              <Box key={index}>
                <Typography component="h5" variant="h5" sx={{ mb: 4 }}>
                  {item[0]}
                </Typography>
                {item[1].length ? (
                  <Stack spacing={2}>
                    {item[1].map((item, index) => (
                      <Box key={index}>
                        <Link
                          variant="subtitle1"
                          color="inherit"
                          underline="none"
                          href={item[1]}
                          target="_blank"
                          rel="noopener"
                        >
                          {item[0]}
                        </Link>
                      </Box>
                    ))}
                  </Stack>
                ) : (
                  <></>
                )}
              </Box>
            ))}

            <Stack direction="column">
              <Typography component="h5" variant="h5" sx={{ mb: 4 }}>
                <Link
                  variant="h5"
                  color="inherit"
                  underline="none"
                  href="https://nimbusventure.com/#about"
                  target="_blank"
                  rel="noopener"
                >
                  About Us
                </Link>
              </Typography>
              <Typography component="h5" variant="h5" sx={{ mb: 4 }}>
                <Link
                  variant="h5"
                  color="inherit"
                  underline="none"
                  href="https://nimbusventure.com/#contact"
                  target="_blank"
                  rel="noopener"
                >
                  Contact Us
                </Link>
              </Typography>
            </Stack>
          </Stack>

          <Box>
            <Typography textAlign="center" component="p" sx={{ pb: 2 }}>
              &copy; 2023 Team Hack Elite+, All rights reserved.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Paper>
  </footer>
);

export default Footer;
