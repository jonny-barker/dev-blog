import { ChangeEvent, FormEvent, useState } from "react";
import { form } from "../types";
import { addDoc } from "firebase/firestore";

export const NewPost = () => {
  const [form, setForm] = useState<form>({
    id: Date.now(),
    title: "",
    subTitle: "",
    body: "",
  });
  const oldPosts = JSON.parse(localStorage.getItem("posts") || "[]");
  const posts: Array<form> = [...oldPosts];
  const handleChange = (event: ChangeEvent, id: string) => {
    const newInput: form = { ...form };
    newInput[id] = (event.target as HTMLInputElement).value;
    newInput.id = Date.now();
    setForm(newInput);
  };

  const handleSubmit = (event: FormEvent) => {
    // localStorage.clear() 
    event.preventDefault();
    posts.push(form);
    localStorage.setItem("posts", JSON.stringify(posts));
    setForm({ id: Date.now(), title: "", subTitle: "", body: "" });
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          value={form.title}
          onChange={(event) => {
            handleChange(event, "title");
          }}
        />
        <label htmlFor="title">sub-title</label>
        <input
          type="text"
          value={form.subTitle}
          onChange={(event) => {
            handleChange(event, "subTitle");
          }}
        />
        <label htmlFor="title">body</label>
        <input
          type="text"
          value={form.body}
          onChange={(event) => {
            handleChange(event, "body");
          }}
        />
        <label htmlFor="post"></label>
        <button>post</button>
      </form>
    </div>
  );
};
