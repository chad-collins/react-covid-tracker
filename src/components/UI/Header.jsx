import React, { Component } from 'react'
import styles from './Header.module.css'

export class Header extends Component {



    handleClick = () => {
        this.props.toggleSidebar()
    }

    

    render() {
        return (
            <div className={styles.container}>
               <button className={styles.button} onClick={this.handleClick}>click</button>
            </div>
        )
    }
}

export default Header
