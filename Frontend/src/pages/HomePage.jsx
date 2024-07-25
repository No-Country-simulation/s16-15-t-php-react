import React from 'react'
import styles from '../styles/homePage.module.css'
import CardHomePage from '../components/card/CardHomePage'
import CardHomePageInfo from '../components/card/CardHomePageInfo';
import Footer from "../components/footer/Footer"

const HomePage = () => {
  return (
    <div className={styles.mainDiv}>
        <CardHomePage className={styles.card}/>
        <CardHomePageInfo />
        {/* <Footer /> */}
    </div>
  )
}

export default HomePage