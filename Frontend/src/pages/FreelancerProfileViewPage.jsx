import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/freelancerProfileViewPage.module.css';
import CardProfile from '../components/card/CardProfile';
import CardProfileInfo from '../components/card/CardProfileInfo';

const FreelancerProfileViewPage = () => {
  return (
    <div className={styles.mainDiv}>
        <CardProfile className={styles.card} />
        <CardProfileInfo />
    </div>
  )
}

export default FreelancerProfileViewPage