"use client";

import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/PhoneAndroidOutlined";
import LocationIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import CakeIcon from "@mui/icons-material/CakeOutlined";
import { basePath } from "./../../next.config";

type PersonalDetail = {
  icon: React.ReactNode;
  primary: string;
  secondary: string;
};

const LeftWrapper = () => {
  const plainWhite = {
    color: "#fff",
  };

  const details: PersonalDetail[] = [
    {
      icon: <EmailIcon className="text-[#16212b]" />,
      primary: "Email",
      secondary: "louieaniez@gmail.com",
    },
    {
      icon: <PhoneIcon className="text-[#16212b]" />,
      primary: "Contact",
      secondary: "+639 383 673 347",
    },
    {
      icon: <CakeIcon className="text-[#16212b]" />,
      primary: "Birthday",
      secondary: "April 27, 1998",
    },
    {
      icon: <LocationIcon className="text-[#16212b]" />,
      primary: "Location",
      secondary: "Zambo. Sur, Phil.",
    },
  ];

  return (
    <Box className="min-h-full w-full flex-grow flex-1 rounded-md bg-[#141a21] p-8">
      <Box className="flex flex-col items-center justify-center w-full gap-5">
        <Image
          className="rounded-lg"
          src={`${basePath}/me.png`}
          alt="Me"
          width={100}
          height={24}
          priority
        />
        <Box className="flex flex-col items-center justify-center w-full gap-2">
          <h2 className="text-white font-semibold">Dexter Louie Aniez</h2>
          <Box className="p-2 bg-[#16212b] text-xs text-white rounded-md">
            Fullstack Developer
          </Box>
        </Box>
        <Box className="pt-0">
          <List>
            {details.map((detail, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar>{detail.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={plainWhite}
                  secondaryTypographyProps={plainWhite}
                  primary={detail.primary}
                  secondary={detail.secondary}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftWrapper;
