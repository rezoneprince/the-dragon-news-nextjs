export const getSingleNews = async (id) => {
  const res = await fetch(
    `https://the-dragon-news-server.onrender.com/news/${id}`,
    {
      catch: "no-store",
    }
  );
  return res.json();
};
