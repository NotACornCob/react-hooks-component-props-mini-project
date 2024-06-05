import React from "react";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList"
import Article from "./Article"
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      <Header
        name = {blogData.name}
      />
      <About
        image = {blogData.image}
        about = {blogData.about}
      />
      <ArticleList
        articles = {blogData.posts}
      />
      <Article
      />
    </div>
  );
}

export default App;
