"use client";

import Grid from "@mui/material/Grid";
import LeftWrapper from "@/components/LeftWrapper";
import RightWrapper from "@/components/RightWrapper";

const MainWrapper = () => {
  return (
    <Grid container className="min-h-screen min-w-screen bg-[#03080f]">
      <Grid item xs={6} md={3} className="h-full p-10">
        <LeftWrapper />
      </Grid>
      <Grid item xs={6} md={9} className="h-full p-10">
        <RightWrapper />
      </Grid>
    </Grid>
  );
};

export default MainWrapper;
