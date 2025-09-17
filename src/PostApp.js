import React, {useState} from "react";

function Post({content}) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div style={{border: "1px solid gray", padding: 10, marginBottom: 10}}>
      <p>{content}</p>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}

function PostApp() {
  return (
    <div>
      <h2>Bài 4: Like/Dislike Post</h2>
      <Post content="Học ReactJS có khó không?" />
      <Post content="Props và State là gì?" />
      <Post content="Lập trình web có vui không?" />
    </div>
  );
}

export default PostApp;
