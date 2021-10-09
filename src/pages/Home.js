import React from "react";
import Header from "../components/Header";
import ListedApi from "../components/ListedApi";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <ListedApi />
    </div>
  );
};

export default Home;
