import Link from 'next/link';

export default function NewsPage() {
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href='news/news-1'>News1</Link>
        </li>
        <li>
          <Link href='news/news-2'>News2</Link>
        </li>
        <li>
          <Link href='news/news-3'>News3</Link>
        </li>
      </ul>
    </>
  );
}
