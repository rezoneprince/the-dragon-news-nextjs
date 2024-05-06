export const getSingleNews = async (id) => {
  const res = await fetch(
    `https://the-news-portal-server.vercel.app/news/${id}`,
    {
      catch: "no-store",
    }
  );
  return res.json();
};
