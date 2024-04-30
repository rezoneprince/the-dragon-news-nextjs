import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sideTopNews from "@/assets/side-top-news.png";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideTopNews} width={800} alt="topNews" />
          </CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 text-white px-2 rounded my-5">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Lizards are a Bitcoin bla bla bla is more then need.
            </Typography>
            <Typography gutterBottom className="my-4">
              Author By Rezone Prince April-30-2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SideBar;
