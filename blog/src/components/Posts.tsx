import "../styling/global.css";
import { db } from "../firebase/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState<any>([]);
  let count = 0;

  useEffect(() => {
    const docRef = collection(db, "posts");
    if (count < 2) {
      getDocs(docRef).then((res) => {
        count++;
        const newPosts = res.docs;
        setPosts(newPosts);
      });
    }
  }, [count]);

  return (
    <div id="posts">
      {posts.map((post: any) => {
        const item = post._document.data.value.mapValue.fields;
        return <div key={item.id.integerValue}>
            <h2>{item.title.stringValue}</h2>
            <h3>{item.subTitle.stringValue}</h3>
            <p>{item.body.stringValue}</p>
        </div>
      })}
    </div>
  );
};
