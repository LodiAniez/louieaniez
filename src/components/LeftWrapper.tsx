"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import { basePath } from "./../../next.config";

const LeftWrapper = () => {
  return (
    <Box>
      <Image
        src={`${basePath}/me.png`}
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
    </Box>
  );
};

export default LeftWrapper;
