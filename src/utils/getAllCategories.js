export const getAllCategories = async () => {
  const res = await fetch(
    "https://the-dragon-news-server.onrender.com/categories"
  );
  return res.json();
};
