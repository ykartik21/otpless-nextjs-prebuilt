import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/login">Login</Link>
    </div>
  );
}