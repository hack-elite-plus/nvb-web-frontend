/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { Box, css, SxProps, Theme } from "@mui/material";
import React from "react";
import { numToPixels } from "../utils/util";

interface lampInterface {
  color: string;
  radius?: string | number;
  blur?: string | number;
  sx?: SxProps<Theme>;
}

const Lamp: React.FC<lampInterface> = (props) => {
  let { radius, color, blur } = props;

  radius = numToPixels(radius, "200px");
  blur = numToPixels(blur, "250px");

  const lampStyle = css`
    width: calc(${radius} * 2);
    height: calc(${radius} * 2);
    background: ${color};
    position: absolute;
    z-index: -999999;
    border-radius: 50%;
    filter: blur(${blur});
  `;

  return <Box css={lampStyle} component="div" sx={{ ...props?.sx }}></Box>;
};

export default Lamp;
