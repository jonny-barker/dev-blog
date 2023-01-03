import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Posts } from "./components/Posts";
import { NewPost } from "./components/NewPost";
import { Login } from "./components/Login";
import "./styling/global.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <main>
        <nav>
          <Link to={"/"}>
            <h1>dev-blog</h1>
          </Link>
          <Link to={"/new-post"}>
            <button className="new-post">+</button>
          </Link>
          <Login isAuth={isAuth} setIsAuth={setIsAuth} />
        </nav>

        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </main>
      <footer>
        <h3>
          developed by{" "}
          <a
            href="https://github.com/jonny-barker"
            target="_blank"
            rel="noreferrer"
          >
            jonny barker
          </a>
        </h3>
      </footer>
    </div>
  );
}

export default App;
