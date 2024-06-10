import { getArticles } from '../lib/api';
import Link from 'next/link';

export default function Home({ articles }) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl text-center font-bold mb-8">My Blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <Link href={`/articles/${article.id}`}>
              <div className="block group hover:bg-gray-100 transition duration-300 ease-in-out">
                <div className="px-6 py-4 flex items-center">
                  <div className="w-3/4">
                    <p className="text-xl font-semibold text-blue-600 group-hover:text-blue-700">
                      {article.title}
                    </p>
                  </div>
                  <div className="w-1/4 text-right">
                    <p className="text-gray-600">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
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