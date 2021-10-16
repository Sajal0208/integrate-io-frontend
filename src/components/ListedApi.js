import React from "react";
import styles from "../styles/Home.module.css";
import ApiBox from "./ApiBox";

const ListedApi = () => {
  return (
    <div className={styles.listedapi}>
        <div>
            <p className = {styles.body_title}> Get Started with Our Integrations </p>
            <ApiBox link = '/dev' title = {"Schedule Post on Dev.to"} description = {"Publish your drafted post at your preffered time"} />
            <ApiBox link = '/crosspost' title = {"Cross Post"} description = {"Publish your blog from one platform to another Medium <--> Dev.to <--> Hashnode"} />
            <ApiBox link = '/' title = {"NotionMailer"} description = {"Coming Soon..."} />
            <ApiBox link = '/' title = {"Discord and Airtable"} description = {"Coming Soon..."} />
        </div>
        <div className = {styles.footer} >
            @2021 Integrate.io
        </div>
    </div>
  );
};

export default ListedApi;
