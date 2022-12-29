import { useState } from "react";

export const NewPost = () => {
  const [form, setForm] = useState({ title: "", subTitle: "", body: "" });
const handleChange = (event : ) => {
    console.log(event)
    console.log(event.target.value)
}
  return (
    <div>
      <form>
        <label htmlFor="title">title</label>
        <input type="text" value={form.title} onChange={event => handleChange(event)}/>
        <label htmlFor="title">sub-title</label>
        <input type="text" value={form.subTitle} />
        <label htmlFor="title">body</label>
        <input type="text" value={form.body} />
      </form>
    </div>
  );
};
