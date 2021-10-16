import React from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import ApiBox from "../components/ApiBox";

const CrossPost = () => {
  return (
    <div>
      <Header />
      <div className={styles.listedapi}>
        <div>
          <ApiBox
            link="/crosspost/devToMed"
            title={"Post From Dev to Medium or Hashnode"}
            description={""}
          />
          <ApiBox
            link="/crosspost/medToDev"
            title={"Post From Medium to Dev or Hashnode"}
            description={""}
          />
          <ApiBox
            link="/crosspost/hashToDev"
            title={"Post From Hashnode to Dev or Medium"}
            description={""}
          />
        </div>
      </div>
    </div>
  );
};

export default CrossPost;
