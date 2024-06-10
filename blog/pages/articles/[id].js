import { getArticles } from '../../lib/api';
import { useRouter } from 'next/router';

export default function Article({ article }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl text-center font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 text-right mb-4">{new Date(article.publishedAt).toLocaleDateString()}</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: article.content }}></div>
    </div>
  );
}

export async function getStaticPaths() {
  const articles = await getArticles();
  const paths = articles.map((article) => ({
    params: { id: article.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const articles = await getArticles();
  const article = articles.find((article) => article.id === params.id);
  
  return {
    props: { article },
  };
}