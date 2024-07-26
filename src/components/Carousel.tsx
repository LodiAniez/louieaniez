"use client";

import CarouselComponent from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import Image from "next/image";

const Item = ({ path }: { path: string }) => {
  return (
    <Box className="w-full h-96">
      <Image src={path} alt="image" width={1000} height={300} priority />
    </Box>
  );
};

const Carousel = ({ images }: { images: string[] }) => {
  return (
    <CarouselComponent
      indicatorContainerProps={{
        style: {
          zIndex: 1,
          marginTop: "-40px",
          position: "relative",
        },
      }}
      animation="slide"
      height={210}
    >
      {images.map((image, i) => (
        <Item key={i} path={image} />
      ))}
    </CarouselComponent>
  );
};

export default Carousel;
