import { use } from "react";

function UsePosts() {
  // Use `use` to suspend until the promise resolves
  const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );
  //Limitation - will create a new promise on every render
  // Still NOt ready for Production

  const posts = use(fetchPosts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>  
        </div>
      ))}
    </div>
  );
}

export default UsePosts;
