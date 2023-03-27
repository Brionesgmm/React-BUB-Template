import React from "react";

const PostPreview = ({ post }) => (
  <li className="col-6 justify-content-between mt-5">
    <a href={`/post/${post._id}`}>
      <img className="img-fluid" src={post.image} />
    </a>
  </li>
);

export default PostPreview;
