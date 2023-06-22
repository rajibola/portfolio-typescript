import { ReactComponent as Checkmark } from "assets/checkmark.svg";
import { ReactComponent as Clipboard } from "assets/clipboard.svg";
import { ReactComponent as Github } from "assets/github-round.svg";
import { ReactComponent as LinkedIn } from "assets/linkedin.svg";
import { useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import postlist from "../../../posts.json";
import styles from "./post.module.css";

export const Article = () => {
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
    <div className="bg-white pt-20">
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

      <div className={styles.tags}>
        {["react", "javascript", "typescript", "nextjs", "tailwindcss"].map(
          (tag) => (
            <div className="rounded-md px-2 cursor-pointer py-1 text-11 font-semibold border border-slate-100 uppercase text-slate-800 font-graphik hover:bg-slate-100">
              {tag}
            </div>
          )
        )}
      </div>
      <div className={styles.line}>
        <div className="my-12 flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full bg-slate-700" />
          <div className="text-12">
            <p className="font-semibold text-slate-900">Ridwan Ajibola</p>
            <p className="text-slate-500">Frontend Developer</p>
          </div>
        </div>

        <div className="flex gap-4 items-center w-32 h-4 justify-end">
          <LinkedIn className=" h-6 w-auto text-slate-600 hover:text-slate-500" />
          <Github className="h-6 w-auto text-slate-600" />
        </div>
      </div>
    </div>
  );
};