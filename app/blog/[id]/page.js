import { notFound } from "next/navigation";
import LikeButton from "../../../components/LikeButton";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  return { title: post ? post.title : "Post not found" };
}

export default async function Post({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  );
}