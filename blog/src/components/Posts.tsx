import "../styling/global.css";
import { db } from "../firebase/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  
  console.log(posts);
  return loading ? (
    <p>Loading...</p>
  ) : (
    <div id="posts">
      {posts.map((post: any) => {
        return (
          <div key={post.id}>
            <h4 className="id">{post.id}</h4>
            <h2 className="title">{post.title}</h2>
            <h3 className="sub-title">{post.subTitle}</h3>
            <p className="body">{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};
