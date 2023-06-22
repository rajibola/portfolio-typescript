import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "shared";
import postlist from "../../posts.json";
import { Hero } from "./hero";
import gsap from "gsap";
import { Footer } from "shared/footer";
import { Article } from "./article";

export const Post = () => {
  const postTimeline = gsap.timeline();
  const { id } = useParams();
  const pickPost = postlist[0];
  const [copy, setCopy] = useState(false);

  const post = {
    title: pickPost.title,
    content: pickPost.content,
    date: pickPost.date,
    thumbnail: pickPost.thumbnail,
    author: pickPost.author,
  };

  return (
    <div>
      <Header timeline={postTimeline} show />
      <Hero />
      <Article />
      <Footer />
    </div>
  );
};
