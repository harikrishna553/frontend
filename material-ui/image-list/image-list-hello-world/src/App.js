import { Box, Stack, Typography } from "@mui/material";

import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

function capitalizeFirstLetter(str) {
  if (str.length === 0) return ""; // Return an empty string if the input is empty
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function App() {
  /* Images are downloaded from https://unsplash.com/ */
  const imageData = [
    {
      img: "/assets/images/alyson-mcphee.jpg",
      title: "Cutting Vegetables",
      author: "Alyson Mcphee",
    },
    {
      img: "/assets/images/kevin-mccutcheon.jpg",
      title: "Dish Making",
      author: "Kevin Mccutcheon",
    },
    {
      img: "/assets/images/myles-tan.jpg",
      title: "Beach Cooking",
      author: "Myles Tan",
    },
    {
      img: "/assets/images/taylor-kiser.jpg",
      title: "Bread Making",
      author: "Taylor Kiser",
    },
    {
      img: "/assets/images/brooke-lark.jpg",
      title: "Fruits",
      author: "Brooke Lark",
    },
    {
      img: "/assets/images/jeff-sheldon.jpg",
      title: "Kitchen",
      author: "Jeff Sheldon",
    },
    {
      img: "/assets/images/kristina-tripkovic.jpg",
      title: "Karanji",
      author: "Kristina Tripkovic",
    },
    {
      img: "/assets/images/odiseo-castrejon.jpg",
      title: "Professional",
      author: "Odiseo Castrejon",
    },
    {
      img: "/assets/images/toa-heftiba.jpg",
      title: "Check Kit",
      author: "Toa Heftiba",
    },
  ];

  const variants = ["standard", "quilted", "masonry", "woven"];

  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        margin: 8,
        gap: 5,
      }}
    >
      {variants.map((variant, index) => (
        <Box>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {capitalizeFirstLetter(variant)} Layout
          </Typography>
          <ImageList
            variant={variant}
            cols={3}
            rowHeight={168}
            gap={30}
            sx={{
              width: 750,
              height: 400,
            }}
          >
            {imageData.map((image, index) => (
              <ImageListItem key={index}>
                <img
                  src={image.img}
                  alt={image.title}
                  loading="lazy"
                  width="150"
                  height="80"
                />

                <ImageListItemBar
                  title={image.title}
                  subtitle={<span>by: {image.author}</span>}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      ))}
    </Stack>
  );
}

export default App;
