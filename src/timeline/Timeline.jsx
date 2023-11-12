import React, { useState } from "react";
import Post from "./posts/Post";
import Sugesstions from './Sugesstions';
import { Avatar } from '@mui/material';

import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      avatar_img: "src/img/sejaumbu.jpg",
      user: "SejaUmbu",
      postImage: "src/img/umbu.jpg",
      likes: 120,
      timestamp: "2d"
    },
    {
      user: "São Paulo FC",
      postImage: "https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.bolavip.com%2Fjpg%2Fbr%2Ffull%2FBBR_20230925_BBR_153005_53211557034_534289598e_c-e1695646279208.jpg&width=1200&height=740",
      likes: 1000,
      timestamp: "12d"
    },
    {
      user: "instituto.proa",
      postImage: "https://www.proa.org.br/wp-content/uploads/2021/12/banner1_home_ester_1080x1198px.jpg",
      likes: 500,
      timestamp: "3d"
    },
    {
      user: "Netflix Brasil",
      postImage: "https://sm.ign.com/ign_br/screenshot/default/captura-de-tela-2021-04-01-as-125248_gvnx.png",
      likes: 800,
      timestamp: "1hr"
    }
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline_posts">
          {posts.map((post, index) => (
            <Post
              key={index}
              avatar_img={post.avatar_img}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;
