import React from "react";
import styles from "../styles/Home.module.css";
import ApiBox from "./ApiBox";

const ListedApi = () => {
  return (
    <div className={styles.listedapi}>
        <div>
            <p className = {styles.body_title}> Get Started with Our Integrations </p>
            <ApiBox title = {"Schedule Post on Dev.to"} description = {"Publish your drafted post at your preffered time"} />
            <ApiBox title = {"Cross Post"} description = {"Publish your blog from one platform to another Medium <--> Dev.to <--> Hashnode"} />
            <ApiBox title = {"NotionMailer"} description = {"Send Emails using Notion"} />
            <ApiBox title = {"Discord and Airtable"} description = {"Integrate Discord with Airtable for better community management of your server"} />
        </div>
        <div className = {styles.footer} >
            @2021 Integrate.io
        </div>
    </div>
  );
};

export default ListedApi;
