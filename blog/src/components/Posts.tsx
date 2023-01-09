import "../styling/global.css";
import { db } from "../firebase/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState<any>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = collection(db, "posts");
        const response = await getDocs(docRef);
        let data: any = [];
        if (response) {
          response.forEach((doc) => {
            data.push(doc.data());
          });
        }
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [setPosts, setLoading]);

  console.log(posts);
  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="posts">
      {posts.map((post: any) => {
        const date = new Date(post.id).toUTCString();
        return (
          <div key={post.id} className="post">
            <h4 className="id">{date}</h4>
            <h2 className="title">{post.title}</h2>
            <h3 className="sub-title">{post.subTitle}</h3>
            <p className="body">{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};
