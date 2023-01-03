import "../styling/global.css";
import { db } from "../firebase/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState<any>([
    {
      id: 1672408216543,
      subTitle: "",
      title: "test3",
      body: "",
    },
    {
      title: "test",
      body: "",
      subTitle: "",
      id: 1672403727055,
    },
    {
      body: "",
      subTitle: "",
      title: "test2",
      id: 1672408214474,
    },
    {
      title: "test 5",
      subTitle: "this is a test",
      id: 1672744047906,
      body: "hopefully this one works",
    },
    {
      subTitle: "",
      title: "test1",
      id: 1672408212694,
      body: "",
    },
    {
      id: 1672408219600,
      body: "",
      title: "test4",
      subTitle: "",
    },
  ]);


  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const docRef = collection(db, "posts");
  //       const response = await getDocs(docRef);
  //       let data: any = [];
  //       if (response) {
  //         response.forEach((doc) => {
  //           data.push(doc.data());
  //         });
  //       }
  //       setPosts(data);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  console.log(posts);
  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="posts">
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
