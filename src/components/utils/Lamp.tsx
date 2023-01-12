/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { Box, css, SxProps, Theme } from "@mui/material";
import React from "react";

interface lampInterface {
  radius: string;
  color: string;
  blur?: string;
  sx?: SxProps<Theme>;
}

const Lamp: React.FC<lampInterface> = (props) => {
  let { radius, color, blur = "250px", sx = {} } = props;

  const lampStyle = css`
    width: calc(${radius} * 2);
    height: calc(${radius} * 2);
    background: ${color};
    position: absolute;
    z-index: -999999;
    border-radius: 50%;
    filter: blur(${blur});
  `;

  return <Box css={lampStyle} component="div" sx={sx}></Box>;
};

export default Lamp;
