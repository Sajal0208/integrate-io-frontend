import axios from "axios";
import React, { useState } from "react";
import styles from "../styles/CrossPost.module.css";
import Header from "./Header";
import { Link } from "react-router-dom";

const HashToDevMed = () => {
  const [url, setUrl] = useState("");
  const [dev, setDev] = useState("");
  const [medium, setMedium] = useState("");
  const [isPosted, setIsPosted] = useState(false);

  const postHandler = (mediumUserId) => {
    const body = {
        "url" : url,
        "dev": true,
        "medium": true,
        "dev_api": dev,
        "medium_id": mediumUserId,
        "medium_api": medium
    };

    axios
      .post("https://integrate-app-xyz.herokuapp.com/api/v2/hash", body)
      .then((res) => {
        console.log(res);
        setUrl("");
        setDev("");
        setMedium("");
        console.log('heyyyyyyy')
        setIsPosted(true);
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
    }

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
                placeholder="Medium Token Id"
                value={medium}
                required
                onChange={(e) => setMedium(e.target.value)}
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
            <div style={{ display: 'flex' , flexDirection: 'column',   margin: "30px", fontSize: "22px" , alignContent: 'center' , 'alignItems' : 'center' }}>
              {" "}
              <p> Your content has been posted to Dev.to and Medium</p>
              <Link to = '/'>
                <button
                  type="button"
                  className="py-2 px-4 my-2  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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

export default HashToDevMed;
