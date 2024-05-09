export const getCategoryNews = async (category) => {
  const res = await fetch(
    `https://the-dragon-news-server.onrender.com/news?category=${category}`,
    {
      catch: "no-store",
    }
  );
  return res.json();
};
