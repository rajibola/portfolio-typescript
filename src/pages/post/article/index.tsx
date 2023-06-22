import { ReactComponent as Checkmark } from "assets/checkmark.svg";
import { ReactComponent as Clipboard } from "assets/clipboard.svg";
import { ReactComponent as Github } from "assets/github-round.svg";
import { ReactComponent as LinkedIn } from "assets/linkedin.svg";
import { useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";
import postlist from "../../../posts.json";

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
      <StyledMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <div className="min-w-[25rem] bg-slate-300  overflow-hidden">
                <div className="flex justify-between px-4 h-11 text-slate-900 text-base items-center font-semibold">
                  <p className="text-base font-overpassMono">{match[1]}</p>
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
                      <Clipboard className="h-4 w-auto" />
                      <p className="text-xs">Copy</p>
                    </button>
                  )}
                </div>
                <SyntaxHighlighter
                  style={tomorrowNightBlue as any}
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
        children={post.content}
      />

      <Tags>
        {["react", "javascript", "typescript", "nextjs", "tailwindcss"].map(
          (tag) => (
            <div className="rounded-md px-2 cursor-pointer py-1 text-11 font-semibold border border-slate-100 uppercase text-slate-800 font-graphik hover:bg-slate-100">
              {tag}
            </div>
          )
        )}
      </Tags>
      <Line>
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
      </Line>
    </div>
  );
};

export const StyledMarkdown = styled(Markdown)`
  width: min(100% - 3rem, 65ch);
  margin-inline: auto;
  font-size: var(--fs-1);
  line-height: 1.6;
  color: black;
  font-family: "Source Sans Pro", sans-serif;

  & > * + * {
    margin-top: var(--flow-space, 1em);
  }

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  & h1 {
    font-size: var(--fs-5);
    font-weight: 700;
  }

  & h2 {
    font-size: var(--fs-4);
    font-weight: 600;
  }

  & h3 {
    font-size: var(--fs-3);
    font-weight: 500;
  }

  & h4 {
    font-size: var(--fs-2);
    font-weight: 500;
  }

  & h5 {
    font-size: var(--fs-1);
    font-weight: 500;
  }

  & h6 {
    font-size: var(--fs-0);
    font-weight: 500;
  }

  & pre code {
    font-size: var(--fs-0);
    line-height: -2;
    background-color: transparent;
    padding: 0;
    font-family: "Overpass Mono", monospace;
  }

  & code {
    font-size: var(--fs--1);
    line-height: 1.4;
    padding: 1px 4px;
    background-color: rgb(216, 216, 216);
    border-radius: 4px;
  }
`;

const Line = styled.div`
  width: min(100% - 3rem, 97ch);
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 50px;
  font-family: "Source Sans Pro", sans-serif;
  align-self: center;
  border-top: 1px solid #c4c4c4;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tags = styled.div`
  width: min(100% - 3rem, 97ch);
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-top: 48px;
`;
