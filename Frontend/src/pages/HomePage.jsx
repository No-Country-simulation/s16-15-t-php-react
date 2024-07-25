import React from 'react'
import styles from '../styles/homePage.module.css'
import CardHomePage from '../components/card/CardHomePage'
import Footer from "../components/footer/Footer"

const HomePage = () => {
  return (
    <div className={styles.mainDiv}>
        <CardHomePage className={styles.card}/>
        {/* <Footer /> */}
    </div>
  )
}

export default HomePage