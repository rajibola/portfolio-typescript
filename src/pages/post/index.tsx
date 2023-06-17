import Markdown from "react-markdown";
import postlist from "../../posts.json";

export const Post = () => {
  const pickPost = postlist[0];

  const post = {
    title: pickPost.title,
    content: pickPost.content,
    date: pickPost.date,
  };
  return (
    <div>
      <Markdown children={post.content} />
    </div>
  );
};
