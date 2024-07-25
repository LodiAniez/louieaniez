"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { basePath } from "./../../next.config";

const AboutMe = () => {
  return (
    <Grid container>
      <Grid item xs={6} md={6}>
        <Box className="flex flex-col p-4 gap-4">
          <label className="font-mono text-white font-bold text-4xl">
            about me
          </label>
          <div>
            <p className="text-[#e1e1e3] text-lg">
              I'm a Fullstack Developer from Molave, Zamboanga del Sur,
              Philippines.
            </p>
          </div>
          <Box className="gap-4">
            <p className="text-[#dadbe3] text-sm leading-5 pb-6">
              I am a dedicated fullstack software developer with a passion for
              crafting clean, efficient code and building innovative digital
              solutions. With over 5+ years of experience in the industry, I
              thrive on tackling challenges and transforming ideas into reality.
              My expertise spans frontend development using modern frameworks
              like React, Vue and Angular, backend development with Node.js, and
              database management with SQL and NoSQL. I enjoy collaborating with
              multidisciplinary teams to deliver robust, scalable applications
              that meet both user needs and business objectives. As I continue
              to grow in this dynamic field, I look forward to contributing my
              skills and creativity to projects that push the boundaries of
              technology.
            </p>
            <p className="text-[#dadbe3] text-sm leading-5 pb-6">
              When I'm not coding, you'll find me in the church most of the
              time, I enjoy my time being in the church as I find it a peaceful
              place to spend my free time. When I'm at church, I participate in
              street preaching, visitation, etc., but what I actually enjoy most
              when I'm at that place is the joy in singing songs.
            </p>
            <p className="text-[#dadbe3] text-sm leading-5">
              I also play some outdoor sports like basketball and sepak takraw,
              and read books, watch documentaries or anime movies when I'm alone
              at home. I don't usually socialize as I'm an introvert person, I
              only go out when necessary.
            </p>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        md={6}
        className="flex flex-col justify-center items-center gap-2"
      >
        <Image
          className="mix-blend-overlay"
          src={`${basePath}/me/me1.jpg`}
          alt="image"
          width={350}
          height={400}
          priority
        />
      </Grid>
    </Grid>
  );
};

export default AboutMe;
