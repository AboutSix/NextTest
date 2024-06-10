import { getArticles } from '../lib/api';
import Link from 'next/link';

export default function Home({ articles }) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="mb-4">
            <Link href={`/articles/${article.id}`}>
              <p className="text-2xl font-semibold text-blue-600 hover:underline">
                {article.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const articles = await getArticles();
  return {
    props: { articles },
  };
}