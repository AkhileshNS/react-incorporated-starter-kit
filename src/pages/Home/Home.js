
// External Modules
import React, { Component } from 'react'

// Internal CSS
import styles from './Home.module.css';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.Home}>
        <p className={styles.title}>Welcome to Home</p>
      </div>
    )
  }
}
