import React from 'react';
import styles from '../styles/Home.module.css';
import Image from  'next/image';
import logoImg from '../assets/logo.png';
import Divider from '@mui/material/Divider';

export default function Header() {
  return (
    <div className={styles.headCont}>
      <Image className={styles.logo}
          src={logoImg} 
          alt="/"
          height="80"
        />

     <Divider></Divider>
    </div>
    
  )
}
