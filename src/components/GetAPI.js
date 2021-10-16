import axios from "axios";
import React, {  useState } from "react";
import DateSelection from "./DateSelection";
import InputAPI from "./InputAPI";
import RenderPosts from "./RenderPosts";

const initialPosts = [
];

const GetAPI = () => {
  const [isAPI, setIsAPI] = useState(false);
  const [apikey, setApikey] = useState("");
  const [postId, setPostId] = useState();
  const [isDate, setIsDate] = useState(false);
  const [posts, setPosts] = useState(initialPosts);

  function componentDidMount() {
    axios
      .get("https://dev.to/api/articles/me/unpublished", {
        headers: {
          "api-key": apikey,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        const post = response.data;
        console.log(post)
        setPosts(post);
        setIsAPI(true);
      })
      .catch((error) => {
        console.log(error);
        alert('Please Enter a valid Api-Key')
        return;
      });
  }
  const submitApiHandler = (e) => {
    e.preventDefault();
    componentDidMount();
  };
  const submitButtonHandler = (id) => {
    setPostId(id);
    setIsDate(true);
  };

  

  if (!isAPI && !isDate) {
    return (
      <>
      <InputAPI
        setApikey={setApikey}
        submitApiHandler={submitApiHandler}
        apikey={apikey}
      />
      </>
    );
  }

  if (!isDate && isAPI) {
    return (
      <>
        <RenderPosts posts={posts} submitButtonHandler={submitButtonHandler} />
      </>
    );
  }

  if (isDate) {
    return <DateSelection postId={postId} apikey = {apikey}/>;
  }
};

export default GetAPI;
