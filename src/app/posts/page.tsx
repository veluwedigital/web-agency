

import { delay } from "@/lib/utils";
import { BlogPostsResponse } from "@/models/BlogPost";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();

  await delay(1000);

  return (
    <div className="relative min-h-screen">
    
      <div className="absolute inset-0 bg-white/80 -z-10" />

      <div className="max-w-prose m-auto space-y-5 py-10">
        <h1 className="text-3xl text-center mb-3 font-bold">Posts</h1>
        {posts.map(({ id, title }) => (
          <article key={title}>
            <h2>
              <Link href={`/posts/${id}`} className="text-lg font-bold">
                {title}
              </Link>
            </h2>
          </article>
        ))}
      </div>
    </div>
  );
}