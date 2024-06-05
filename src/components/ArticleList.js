import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const articleElements = posts.map((blog) => {
        return <Article 
        key = {blog.id}
        title = {blog.title}
        date = {blog.date}
        preview = {blog.preview}
        />;
    });
    return  <main>
            {articleElements}
            </main>
}
export default ArticleList;