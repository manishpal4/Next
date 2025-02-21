import { useState, useEffect } from "react";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
}

export default function MediumFeed() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const mediumRSS = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Mann_eei";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(mediumRSS);
        const data = await response.json();
        setPosts(data.items.slice(0, 5)); // Get the latest 5 posts
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4 ">
      <h2 className="text-xl  text-white/30 px-7 py-5 font-bold">Latest Medium Posts</h2>
      <ul className="mt-4">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <li key={index} className=" mb-10 px-7 text-3xl leading-2">
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                {post.title}
              </a>
              <p className="text-sm px-7 text-gray-500">{new Date(post.pubDate).toDateString()}</p>
            </li>
       
            
          ))
        ) : (
          <p className="text-white text-xl">Loading posts...</p>
        )}
      </ul>
    </div>
  );
}
