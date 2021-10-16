import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../assets/images/final.jpg"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className = {styles.header} >
        <div  className = {styles.header_primary}>
            <img className = {styles.logo} src = {logo} alt = "logo"/>
            <p className = {styles.title}>Integrateapp.xyz</p>
        </div>
        <div className = {styles.header_secondary}>
            <Link to = '/' exact className = {styles.header_buttons}>Home</Link>
            <p className = {styles.header_buttons}>About</p>
            <p className = {styles.header_buttons}>Contact</p>
        </div>
    </div>
  );
};

export default Header;
