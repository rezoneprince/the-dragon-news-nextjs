import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const NewsDetailPage = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);
  //   console.log(data);
  return (
    <Box className="my-5">
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              width={800}
              height={500}
              alt="news"
            />
            <Grid className="mt-2" container spacing={2}>
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt="news"
                />
              </Grid>
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt="news"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h4" component="h2">
              {news.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar alt="author" src={news.author.img} />
              <Box className="mx-2">
                <Typography variant="h6" component="h6">
                  {news.author.name}
                </Typography>
                <Typography>
                  Publish Date_<b>{news.author.published_date}</b>
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                textAlign: "justify",
                marginTop: "10px",
                whiteSpace: "pre-wrap",
              }}
            >
              {news.details}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginTop: "10px",
              }}
            >
              ``A good plan violently executed now is better than a perfect plan
              executed next week.``
            </Typography>
            <Typography variant="h5"> ``Rezone Prince``</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetailPage;
