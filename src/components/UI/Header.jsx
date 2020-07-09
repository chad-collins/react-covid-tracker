import React, { Component } from 'react'
import styles from './Header.module.css'
import icon from '../../menu.svg'
import cx from "classnames";

export class Header extends Component {



    handleClick = () => {
        this.props.toggleSidebar()
    }

    rotate = () => {
        if(this.props.showingSidebar){
            return styles.rotate
        }
        else return ''
    }
    

    render() {
        return (
            <div className={styles.container}>
               <img className={cx(styles.icon, this.rotate())} src={icon} onClick={this.handleClick} alt="Menu"/>
            </div>
        )
    }
}

export default Header
