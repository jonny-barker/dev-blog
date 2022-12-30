import { Link } from "react-router-dom";

export const Posts = () => {
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  return (
    <div id="posts">
      <Link to="/new-post">
        <button>+</button>
      </Link>

      {posts.map((post: any) => {
        return (
          <div>
            <h4>{post.id}</h4>
            <h2>{post.title}</h2>
            <h4>{post.subTitle}</h4>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};
