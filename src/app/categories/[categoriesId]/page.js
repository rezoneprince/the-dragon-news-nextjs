import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const DynamicNewsPage = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);

  return (
    <div className="my-5">
      <h1>
        Dynamic News <b>{searchParams.category}</b> news: {data.length}
      </h1>
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news.id} item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={news.thumbnail_url}
                    height={200}
                    width={800}
                    alt="topNews"
                  />
                </CardMedia>
                <CardContent>
                  <p className="w-[100px] bg-red-500 text-white px-2 rounded my-5">
                    {news.category}
                  </p>
                  <Typography gutterBottom>{news.title}</Typography>
                  <Typography gutterBottom className="my-4">
                    <b>Author Name:</b> {news.author.name}
                  </Typography>
                  <Typography gutterBottom className="my-4">
                    <b>Publish Date:</b>
                    <span>{news.author.published_date}</span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
