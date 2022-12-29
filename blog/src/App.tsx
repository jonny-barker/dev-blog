import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Entries } from "./components/Entires";
import { NewPost } from "./components/NewPost";

function App() {
  return (
    <div className="App">
      <h1>dev-blog</h1>
      <Link to="/new-post"><button>+</button></Link>
      <Routes>
        <Route path="/" element={<Entries/>}/>
        <Route path="/new-post" element={<NewPost/>}/>
      </Routes>
    </div>
  );
}

export default App;
