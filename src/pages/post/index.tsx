import Markdown from "react-markdown";
import postlist from "../../posts.json";
import styles from "./post.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ReactComponent as Clipboard } from "assets/clipbaord.svg";

export const Post = () => {
  const pickPost = postlist[0];

  const post = {
    title: pickPost.title,
    content: pickPost.content,
    date: pickPost.date,
  };
  return (
    <div className="bg-white/90">
      <Markdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <div className="min-w-[25rem] bg-slate-400 rounded-md overflow-hidden">
                <div className="flex justify-between px-4 text-white text-base items-center font-semibold">
                  <p className="text-base">{match[1]}</p>
                  <button className="py-1 inline-flex items-center gap-1">
                    <Clipboard className="" />
                  </button>
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
  );
};
