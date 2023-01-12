/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { Box } from "@mui/material";
import { css } from "@emotion/react";
import React from "react";

const boxStyle = css`
  display: flex;
  gap: 6px;
  flex-direction: column;

  & > div {
    height: 3px;
    border-radius: 5px;
  }

  & > div:nth-of-type(1) {
    width: 40px;
  }
  & > div:nth-of-type(2) {
    width: 26px;
  }
  & > div:nth-of-type(3) {
    width: 35px;
  }
`;

const Hamburger: React.FC = () => {
  return (
    <Box css={boxStyle}>
      <Box bgcolor="primary.main"></Box>
      <Box bgcolor="primary.main"></Box>
      <Box bgcolor="primary.main"></Box>
    </Box>
  );
};

export default Hamburger;
