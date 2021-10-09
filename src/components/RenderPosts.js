import React from "react";
import styles from "../styles/DevDotTo.module.css";

const RenderPosts = ({ posts, submitButtonHandler }) => {
  return (
    <div className={styles.dev_body_secondary}>
      {posts.length === 0
        ? "There are no saved posts in draft"
        : posts.map((post, index) => (
            <button
              onClick={() => submitButtonHandler(post.id, post.title)}
              className="flex items-center mx-auto"
              key={index + 1}
            >
              <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 my-4 last:mt-30">
                <div className="flex-shrink-0"></div>
                <div>
                  <div className="text-xl font-medium text-orange">
                    {post.title}
                  </div>
                </div>
              </div>
            </button>
          ))}
    </div>
  );
};

export default RenderPosts;
