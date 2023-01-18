/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { Box, css, SxProps, Theme } from "@mui/material";
import React from "react";

interface LampProps {
  radius: string;
  color: string;
  blur?: string;
  sx?: SxProps<Theme>;
}

const Lamp: React.FC<LampProps> = (props) => {
  let { radius, color, blur = "250px", sx = {} } = props;

  const lampStyle = css`
    width: calc(${radius} * 2);
    height: calc(${radius} * 2);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${color};
    z-index: -999999;
    border-radius: 50%;
    filter: blur(${blur});
  `;

  return <Box css={lampStyle} component="div" sx={sx}></Box>;
};

export default Lamp;
