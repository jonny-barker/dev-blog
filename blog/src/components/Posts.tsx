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
        //console.log("response", response);
        let data = { title: "not found" };
        console.log(response, 'response')
        if (response) {
          data = response.docs;
        }
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <p>loaded</p>
    // <div id="posts">
    //   {posts.map((post: any) => {
    //     const item = post._document.data.value.mapValue.fields;
    //     return (
    //       <div key={item.id.integerValue}>
    //         <h2>{item.title.stringValue}</h2>
    //         <h3>{item.subTitle.stringValue}</h3>
    //         <p>{item.body.stringValue}</p>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};
