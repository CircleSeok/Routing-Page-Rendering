'use client';

import NewsList from '@/components/news-list';
import { useEffect, useState } from 'react';

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:8080/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news.');
        }
        const data = await response.json();
        setNews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>NewsPage</h1>
      {news && <NewsList news={news} />}
    </>
  );
}
