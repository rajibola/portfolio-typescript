import gsap from "gsap";
import { useParams } from "react-router-dom";
import { Header } from "shared";
import { Footer } from "shared/footer";
import postlist from "../../posts.json";
import { Article } from "./article";
import { Hero } from "./hero";

export const Post = () => {
  const postTimeline = gsap.timeline();
  const { id } = useParams();
  const pickPost = postlist[0];

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
