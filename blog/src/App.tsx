import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Posts } from "./components/Posts";
import { NewPost } from "./components/NewPost";
import { Login } from "./components/Login";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Link to={"/"}>
        <h1>dev-blog</h1>

        <Login isAuth={isAuth} setIsAuth={setIsAuth} />
      </Link>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App;
