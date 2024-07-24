import { useState } from "react";

export enum MenuItems {
  ABOUT = "about me",
  EXPERIENCES = "experiences",
  PROJECTS = "projects",
  ACHIEVEMENTS = "achievements",
  SOCIALS = "socials",
  SKILLS = "skills",
}

export const useHook = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItems>(MenuItems.ABOUT);

  const handleSelectItem = (item: MenuItems) => setSelectedItem(item);

  return {
    selectedItem,
    handleSelectItem,
  };
};
