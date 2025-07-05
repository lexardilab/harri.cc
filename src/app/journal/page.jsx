import { client } from "@/app/lib/sanity";
import JournalCard from "../../components/JournalCard";

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    subtitle,
    slug,
    mainImage,
  }`;
  return await client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="pb-6">
      <div className="flex justify-center py-4">
        <h1 className="text-3xl">Journal</h1>
      </div>
      <div
        className="flex justify-center pb-12"
      >
        <p className="justify-center w-1/4 text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, totam?
          Velit molestias nulla perspiciatis et ratione qui voluptas amet. Vel
          dolore autem esse quaerat et.
        </p>
      </div>
      <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-2">
        {posts.map((post) => (
          <JournalCard key={post.slug.current} post={post} />
        ))}
      </div>
      </div>
      
    </div>
  );
}
