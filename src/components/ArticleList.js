import React from "react";
import Article from "./Article"

function ArticleList({posts}){
  const articles = posts.map((post) => (
  <Article
  key= {post.id}
  title= {post.title}
  date= {post.date}
  preview = {post.preview}
  minutes = {post.minutes}
  /> ))
  return (
    <main>{articles}</main>
  )
}

export default ArticleList;

// const technologiesList = technologies.map((tech)=>{
//   return <span key={tech}>{tech}</span>
// }
// )
// return (
//   <div className="project-item">
//     <h3>{name}</h3>
//     <p>{about}</p>
//     <div className="technologies">
//       {technologiesList}
//     </div>
//   </div>
// );
// }