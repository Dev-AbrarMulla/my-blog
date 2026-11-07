import Link from "next/link";

export default async function Blog() {
  console.log("fetching posts");
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts = await res.json();

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/blog/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}