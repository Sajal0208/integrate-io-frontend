import React from "react";
import DevToMedHashForm from "../components/DevToMedHashForm";
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
        </div>
      </div>
    </div>
  );
};

export default CrossPost;
