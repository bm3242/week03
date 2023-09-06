import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Next.js App!</h1>
      <p>
        Navigate to <Link href="/about"><a>About Page</a></Link>
      </p>
    </div>
  );
}

export default HomePage;
