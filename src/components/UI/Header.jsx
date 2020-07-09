import React, { Component } from "react";
import styles from "./Header.module.css";
import icon from "../../menu.svg";
import cx from "classnames";

export class Header extends Component {

  //Handle menu button click
  handleClick = () => {
    this.props.toggleSidebar();
  };

  //Rotate menu icon when menu is open
  rotate = () => {
    if (this.props.showingSidebar) {
      return styles.rotate;
    } else return "";
  };

  render() {
    return (
      <div className={styles.container}>
        <img
          className={cx(styles.icon, this.rotate())}
          src={icon}
          onClick={this.handleClick}
          alt="Menu"
        />
        <h1 className={styles.title}>{this.props.siteTitle}</h1>
        <div></div>
      </div>
    );
  }
}

export default Header;
