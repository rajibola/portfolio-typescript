import Markdown from "react-markdown";
import postlist from "../../posts.json";
import styles from "./post.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ReactComponent as Clipboard } from "assets/clipboard.svg";
import { ReactComponent as Checkmark } from "assets/checkmark.svg";
import { ReactComponent as Clock } from "assets/clock.svg";
import { ReactComponent as Calendar } from "assets/calendar.svg";
import { useState } from "react";
import { Header } from "shared";
import { Footer } from "shared/footer";

export const Post = () => {
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
      <Header show />
      <div className="relative mb-20">
        <div className="bg-black/5 absolute w-full h-full flex items-end pb-14 font-graphik">
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
      <div className="flex">
        <Markdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <div className="min-w-[25rem] bg-slate-400 rounded-md overflow-hidden">
                  <div className="flex justify-between px-4 text-white text-base items-center font-semibold">
                    <p className="text-base">{match[1]}</p>
                    {copy ? (
                      <button className="py-1 inline-flex items-center gap-1">
                        <Checkmark className=" h-4 w-auto" />
                        <p className="text-xs">Copied!</p>
                      </button>
                    ) : (
                      <button
                        className="py-1 inline-flex items-center gap-1"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            String(children).replace(/\n$/, "")
                          );
                          setCopy(true);
                          setTimeout(() => {
                            setCopy(false);
                          }, 2000);
                        }}
                      >
                        <Clipboard className=" h-4 w-auto" />
                        <p className="text-xs">Copy</p>
                      </button>
                    )}
                  </div>
                  <SyntaxHighlighter
                    style={atomOneDark as any}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      padding: "25px",
                    }}
                    {...props}
                    wrapLongLines={true}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code className="md-post-code" {...props}>
                  {children}
                </code>
              );
            },
          }}
          className={styles.markdown}
          children={post.content}
        />
      </div>
      <Footer />
    </div>
  );
};
