import React from "react";
import PostPreview from "./PostPreview";

const PostList = ({ posts }) => (
  <ul className="row list-unstyled">
    {posts.map((post) => (
      <PostPreview key={post._id} post={post} />
    ))}
  </ul>
);

export default PostList;
