import React from 'react';
import styles from '../styles/Home.module.css';
import Image from  'next/image';
import logoImg from '../assets/logo.png';
import Divider from '@mui/material/Divider';

export default function Header() {
  return (
    <div className={styles.headCont}>
      <a href="https://www.translink.ca/" target="_blank" rel="noreferrer">
      <Image className={styles.logo}
          src={logoImg} 
          alt="/"
          height="80"
        />
      </a>
    

     <Divider></Divider>
    </div>
    
  )
}
