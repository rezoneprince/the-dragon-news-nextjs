export const getAllNews = async () => {
  const res = await fetch(
    "https://the-dragon-news-server.onrender.com/all-news",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  return res.json();
};
