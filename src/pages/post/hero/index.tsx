import { ReactComponent as Calendar } from "assets/calendar.svg";
import { ReactComponent as Clock } from "assets/clock.svg";
import { useState } from "react";
import { useParams } from "react-router-dom";
import postlist from "../../../posts.json";
import styles from "./post.module.css";

export const Hero = () => {
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

  console.log(post);
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="bg-black/30 absolute w-full h-full flex items-end pb-14 font-graphik">
          <div className={styles.title}>
            <h1 className="text-white text-6xl font-bold leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex gap-3 items-center">
              <p className="text-white text-20">by {post.author}</p>
              <div className="w-5 h-[1px] bg-white" />
              <p className="text-white text-base">
                <Calendar className="h-4 w-auto inline-block mr-2 mb-[1px] text-white" />
                {post.date}
              </p>
              <div className="w-5 h-[1px] bg-white" />
              <p className="text-white text-base">
                <Clock className="h-4 w-auto inline-block mr-2 mb-[1px] text-white" />
                <span>3 min read</span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full h-full bg-cover object-cover"
          style={{
            backgroundImage: `url(${post.thumbnail})`,
            width: "100vw",
            height: "75vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundBlendMode: "multiply",
          }}
        />
      </div>
    </div>
  );
};
