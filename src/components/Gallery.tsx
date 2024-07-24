"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { basePath } from "./../../next.config";

export type ImageProp = {
  path: string;
  classNames: string;
};

type Props = {
  imagePaths: ImageProp[];
};

const Gallery = ({ imagePaths }: Props) => {
  const [paths, setPaths] = useState<ImageProp[]>([...imagePaths]);
  const handleImageClick = (clickedIndex: number) => {
    setPaths((state) => {
      const copy = [...state];

      const imageToMove = copy[clickedIndex];
      const lastImage = copy[paths.length - 1];

      state[paths.length - 1] = imageToMove;
      state[clickedIndex] = lastImage;

      return [...state];
    });
  };

  useEffect(() => {
    console.log(paths);
  }, [paths]);

  return (
    <Box>
      <Box className="relative mix-blend-lighten">
        {paths.map(({ classNames, path }, index) => (
          <Image
            key={index}
            className={classNames}
            src={`${basePath}/${path}`}
            alt="image"
            width={200}
            height={200}
            priority
            onClick={() => handleImageClick(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Gallery;
