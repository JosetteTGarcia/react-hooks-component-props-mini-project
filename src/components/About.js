import React from "react";

function About({about, image = "https://via.placeholder.com/215"}){
  return(
    <aside>
      <img src={image} alt="blog logo"/>
      <p>{about}</p>
    </aside>
  )
}

export default About;

{/* {bio && bio.length > 1 ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" /> */}