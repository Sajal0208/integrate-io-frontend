import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../assets/images/square_white.png"

const Header = () => {
  return (
    <div className = {styles.header} >
        <div  className = {styles.header_primary}>
            <img className = {styles.logo} src = {logo} alt = "logo"/>
            <p className = {styles.title}>Integrate.io</p>
        </div>
        <div className = {styles.header_secondary}>
            <p className = {styles.header_buttons}>Home</p>
            <p className = {styles.header_buttons}>About</p>
            <p className = {styles.header_buttons}>Contact</p>
        </div>
    </div>
  );
};

export default Header;
