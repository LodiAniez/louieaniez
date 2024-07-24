"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import AboutMe from "@/components/AboutMe";

import { useHook, MenuItems } from "@/hooks/useHook";

const RightWrapper = () => {
  const { handleSelectItem, selectedItem } = useHook();

  return (
    <Box className="min-h-full w-full flex-grow rounded-md bg-[#141a21]">
      <Grid container>
        <Grid item xs={6} md={12}>
          <Box className="bg-[#16212b]">
            <List className="flex flex-row text-[#c3c9f7] p-0">
              <ListItemButton
                selected={selectedItem === MenuItems.ABOUT}
                onClick={() => handleSelectItem(MenuItems.ABOUT)}
              >
                <ListItemText primary="About" className="text-center" />
              </ListItemButton>
              <ListItemButton
                selected={selectedItem === MenuItems.EXPERIENCES}
                onClick={() => handleSelectItem(MenuItems.EXPERIENCES)}
              >
                <ListItemText primary="Experiences" className="text-center" />
              </ListItemButton>
              <ListItemButton
                selected={selectedItem === MenuItems.PROJECTS}
                onClick={() => handleSelectItem(MenuItems.PROJECTS)}
              >
                <ListItemText primary="Projects" className="text-center" />
              </ListItemButton>
              <ListItemButton
                selected={selectedItem === MenuItems.ACHIEVEMENTS}
                onClick={() => handleSelectItem(MenuItems.ACHIEVEMENTS)}
              >
                <ListItemText primary="Achievements" className="text-center" />
              </ListItemButton>
              <ListItemButton
                selected={selectedItem === MenuItems.SOCIALS}
                onClick={() => handleSelectItem(MenuItems.SOCIALS)}
              >
                <ListItemText primary="Socials" className="text-center" />
              </ListItemButton>
              <ListItemButton
                selected={selectedItem === MenuItems.SKILLS}
                onClick={() => handleSelectItem(MenuItems.SKILLS)}
              >
                <ListItemText primary="Skills" className="text-center" />
              </ListItemButton>
            </List>
          </Box>
        </Grid>
      </Grid>
      <Box className="h-full p-2">
        {selectedItem === MenuItems.ABOUT ? <AboutMe /> : selectedItem}
      </Box>
    </Box>
  );
};

export default RightWrapper;
