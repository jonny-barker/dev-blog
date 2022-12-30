import "../styling/global.css";
import { db } from "../firebase/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const docRef = collection(db, "posts");
    getDocs(docRef).then((res) => {
      const newPosts = res.docs;
      console.log(newPosts)
      setPosts(newPosts);
    });
  },[]);



  return (
    <div id="posts">
      {posts.map((post: any) => {

        const item = post._document.data.value.mapValue.field
        // return (
        //   <div id={item.id} className="post">
        //     <h4>{item.id}</h4>
        //     <h2>{item.title}</h2>
        //     <h4 className="sub-title">{item.subTitle}</h4>
        //     <p>{item.body}</p>
        //   </div>
        // );
      })}
    </div>
  );
};
