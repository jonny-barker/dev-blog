import { Link } from "react-router-dom";
import '../styling/global.css'
export const Posts = () => {
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  return (
    <div id="posts">
     
      {posts.map((post: any) => {
        return (
          <div id={post.id} className='post'>
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
