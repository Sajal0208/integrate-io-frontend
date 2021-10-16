import axios from "axios";
import React, { useState } from "react";
import styles from "../styles/CrossPost.module.css";
import Header from "./Header";
import { Link } from "react-router-dom";

const MedToDevHash = () => {
  const [url, setUrl] = useState("");
  const [dev, setDev] = useState("");
  const [hashNode, setHashNode] = useState("");
  const [isPosted, setIsPosted] = useState(false);

  const postHandler = (e) => {
    e.preventDefault();
    const body = {
      url: "https://medium.com/@amanshri.nitrr/a-job-switch-plan-that-actually-works-e09701c26d88",
      dev_api: "dev",
      dev: true,
      hash: true,
      hash_api: "hashNode",
    };

    axios
      .post("http://localhost:8080/api/v2/medium", body)
      .then((res) => {
        console.log(res);
        setUrl("");
        setDev("");
        setHashNode("");
        console.log('heyyyyyyy')
        setIsPosted(true);
      })
      .catch((err) => {
        console.log(err);
        alert("Please Enter Valid Details");
      });
  };

  return (
    <div>
      <Header />
      <div className={styles.dev_body}>
        {!isPosted && (
          <form
            onSubmit={postHandler}
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
                placeholder="Dev.to Token Id"
                value={dev}
                required
                onChange={(e) => setDev(e.target.value)}
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
              className="flex-shrink-0 px-4 py-1.5 text-base font-semibold text-white bg-purple rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
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
            <p>Your content has been posted to Dev.to and HashNode</p>
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

export default MedToDevHash;
