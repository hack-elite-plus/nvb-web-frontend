/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { keyframes, Theme } from "@emotion/react";
import { Box, css, SxProps } from "@mui/material";
import React from "react";

interface ImageProps {
  src: string;
  alt?: string;
  saturate?: boolean;
  sx?: SxProps<Theme>;
  children?: JSX.Element[] | JSX.Element;
}

const mediaContainerStyle = css`
  & {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & img {
    position: relative;
    object-fit: cover;
    object-position: center;
  }
`;

const saturateAnimation = keyframes`
  0% {
    filter: saturate(0);
  }

  100% {
    filter: saturate(1);
  }
}`;

const Media: React.FC<ImageProps> = (props) => {
  const { src, alt = "", sx = {}, saturate = false, children = <></> } = props;

  return (
    <Box css={mediaContainerStyle}>
      <Box
        css={
          saturate &&
          css`
            animation: ${saturateAnimation} 2s forwards ease-in;
          `
        }
        component="img"
        alt={alt}
        src={src}
        sx={sx}
      />
      {children}
    </Box>
  );
};

export default Media;
