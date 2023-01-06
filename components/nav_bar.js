import React from 'react';
import styles from '../styles/Home.module.css';
import Image from  'next/image';
import homeIcon from '../assets/home.svg';
import Link from '@mui/material/Link';


export default function NavBar() {
  return (
    <div className={styles.navCont}>
      <a href="https://www.translink.ca/" target="_blank" rel="noreferrer">
      <Image 
          src={homeIcon} 
          alt="/"
          height="28"
        />
      </a>

      <div className={styles.chevron}></div>

      <Link className={styles.navText} href="https://www.translink.ca/schedules-and-maps?page=1" underline="hover">
        Schedules and Maps
      </Link>

      <div className={styles.chevron}></div>

      <Link className={styles.navText} href="https://www.translink.ca/schedules-and-maps/skytrain?page=1" underline="hover">
        SkyTrain Schedules
      </Link>

      <div className={styles.chevron}></div>

      <p className={styles.navText} >
        Expo Line
      </p>

    </div>
    
  )
}
