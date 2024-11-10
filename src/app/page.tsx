// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <p>Discover meaningful content on my platform.</p>
      <section className="content">
        <h2>Featured Content</h2>
        <p>
          Boost Your Focus and Productivity:
          <br />
          Explore effective strategies to stay focused, manage your time, and
          enhance productivity in today's fast-paced world.
        </p>
        <Link href="/blog" style={{ color: "red" }}>
          Read More
        </Link>
      </section>
    </div>
  );
}
