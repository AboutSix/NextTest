export async function getArticles() {
  const res = await fetch(`${process.env.MICROCMS_ENDPOINT}`, {
    headers: {
      'X-API-KEY': process.env.MICROCMS_API_KEY,
    },
  });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch articles: ${res.statusText}`);
  }
  
  const data = await res.json();
  return data.contents;
}