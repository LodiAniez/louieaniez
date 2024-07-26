"use client";

import Box from "@mui/material/Box";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return <Box className="flex flex-col p-4 gap-4">{children}</Box>;
};

export default PageLayout;
