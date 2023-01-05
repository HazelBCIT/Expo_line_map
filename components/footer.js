import React from 'react';
import styles from '../styles/Home.module.css';
import Image from  'next/image';
import logoImg from '../assets/logo.png';
import Divider from '@mui/material/Divider';

export default function Footer() {
  return (
      
      <footer className={styles.footer}>
        <Divider></Divider>
        <div>
        <Image className={styles.logo}
            src={logoImg} 
            alt="/"
            height="80"
          />
        <div className={styles.body}>
        Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.
        </div>
        </div>
        
        <div>
          <div className={styles.header_02}>
            Contact Us
          </div>
          <div className={styles.body}>
          Call us at 604.953.3333
          <br/>
          400-287 Nelson's Ct., New Westminster, BC V3L0E7
          </div>
        </div>

      </footer>
      
    
  )
}