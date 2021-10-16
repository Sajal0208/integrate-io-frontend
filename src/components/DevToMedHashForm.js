import axios from "axios";
import React, { useState } from "react";
import styles from "../styles/CrossPost.module.css";
import { Link } from "react-router-dom";

import Header from "./Header";

const DevToMedHashForm = () => {
  const [url, setUrl] = useState("");
  const [medium, setMedium] = useState("");
  const [hashNode, setHashNode] = useState("");
  const [isPosted, setIsPosted] = useState(false);

  const postHandler = (mediumUserId) => {
    const body = {
      url: url,
      medium: true,
      hash: true,
      medium_userID: mediumUserId,
      medium_token: medium,
      hash_token: hashNode,
    };

    axios
      .post("http://localhost:8080/api/v2/dev", body)
      .then((res) => {
        console.log(res);
        setIsPosted(true);
        setUrl("");
        setMedium("");
        setHashNode("");
      })
      .catch((err) => {
        console.log(err);
        alert("Please Enter Valid Details");
      });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let mediumUserId;
    axios
      .get(`https://api.medium.com/v1/me?accessToken=${medium}`)
      .then((res) => {
        mediumUserId = res.data.data.id;
        console.log(mediumUserId);
        postHandler(mediumUserId);
      })
      .catch((err) => {
        alert("Please enter a valid Medium Token Id");
        console.log(err);
      });

    // const body = {
    //   url: "https://dev.to/ruppysuppy/front-end-developer-roadmap-zero-to-hero-4pkf",
    //   medium: true,
    //   hash: true,
    //   medium_userID:
    //     "1da14f475be985f113e94785d35c3eab0417e1ef9b95da7dd7b334a1c88bb6066",
    //   medium_token:
    //     "29bf43efea57c7c9e9da98a53274f062b0c09b256372c293e0e644808d078665b",
    //   hash_token: "0398ef26-857d-4b59-b548-f1d2797a9a10",
    // };
  };

  return (
    <div>
      <Header />
      <div className={styles.dev_body}>
        {!isPosted && (
          <form
            onSubmit={formSubmitHandler}
            class="flex flex-col w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center"
          >
            <div class=" relative py-1.5">
              <input
                type="text"
                id='"form-subscribe-Subscribe'
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="URL of the post"
                required
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
            </div>
            <div class=" relative py-1.5">
              <input
                type="text"
                id='"form-subscribe-Subscribe'
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Medium Token Id"
                value={medium}
                required
                onChange={(e) => setMedium(e.target.value)}
              />
            </div>
            <div class=" relative py-1.5">
              <input
                type="text"
                id='"form-subscribe-Subscribe'
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="HashNode Token Id"
                value={hashNode}
                required
                onChange={(e) => setHashNode(e.target.value)}
              />
            </div>
            <button
              class="flex-shrink-0 px-4 py-1.5 text-base font-semibold text-white bg-purple rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Post
            </button>
          </form>
        )}
        {isPosted && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
            }}
          >
            <p>Your content has been posted to Medium and HashNode</p>
            <Link to="/">
              <button
                type="button"
                style={{ width: "50%" }}
                class="py-2 px-4 bg-purple hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Go Back to Home
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevToMedHashForm;
