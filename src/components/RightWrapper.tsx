"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { useHook, MenuItems } from "@/hooks/useHook";

const RightWrapper = () => {
  const { handleSelectItem, selectedItem } = useHook();

  return (
    <Box className="min-h-full w-full flex-grow flex-1 rounded-md bg-[#141a21]">
      <Grid container>
        <Grid item xs={6} md={3} className="flex items-center p-2 pl-3">
          <h1 className="text-white font-semibold capitalize">
            {selectedItem}
          </h1>
        </Grid>
        <Grid item xs={6} md={9}>
          <Box className="bg-[#16212b]">
            <List className="flex flex-row text-[#c3c9f7] p-0">
              <ListItemButton
                selected={selectedItem === MenuItems.ABOUT}
                onClick={() => handleSelectItem(MenuItems.ABOUT)}
              >
                <ListItemText primary="About Me" className="text-center" />
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
            </List>
          </Box>
        </Grid>
      </Grid>
      <Box className="p-4">{selectedItem}</Box>
    </Box>
  );
};

export default RightWrapper;
