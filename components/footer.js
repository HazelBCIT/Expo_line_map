import React from 'react';
import styles from '../styles/Home.module.css';
import Link from '@mui/material/Link';

import Image from  'next/image';
import logoImg from '../assets/logo.png';
import facebookIcon from '../assets/facebook_icon.svg';
import instagramIcon from '../assets/instagram_icon.svg';
import twitterIcon from '../assets/twitter_icon.svg';
import youtubeIcon from '../assets/youtube_icon.svg';

export default function Footer() {
  return (
      
      <footer className={styles.colbox_center}>
        <div className={styles.rowbox}>
          <div className={styles.colbox}>
            <a href="https://www.translink.ca/" target="_blank" rel="noreferrer">
              <Image className={styles.logo}
                  src={logoImg} 
                  alt="/"
                  height="80"
                />
            </a>
            
            <div className={styles.body}>
              Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.
            </div>
          </div>
          
          <div className={styles.colbox}>
            <div className={styles.header_02}>
              Contact Us
            </div>
            <div className={styles.body}>
              Call us at 604.953.3333
              <br/>
              <br/>

              <Link className={styles.body} href="https://www.google.com/maps/place/TransLink/@49.2247324,-122.8939064,17z/data=!3m1!4b1!4m5!3m4!1s0x5486765906294161:0x8be44a756edffc2f!8m2!3d49.2247289!4d-122.8917178" underline="hover">
                400-287 Nelson's Ct., New Westminster, BC V3L0E7
              </Link>

              <div className={styles.social}>
                <a href="https://www.facebook.com/Translink/" target="_blank" rel="noreferrer">
                  <Image className={styles.logo}
                      src={facebookIcon} 
                      alt="/"
                      height="45"
                    />
                </a>

                <a href="https://www.instagram.com/translink/" target="_blank" rel="noreferrer">
                  <Image className={styles.logo}
                      src={instagramIcon} 
                      alt="/"
                      height="45"
                    />
                </a>

                <a href="https://twitter.com/TransLink" target="_blank" rel="noreferrer">
                  <Image className={styles.logo}
                      src={twitterIcon} 
                      alt="/"
                      height="40"
                    />
                </a>

                <a href="https://www.youtube.com/channel/UCfbbmkzSU-uPI4SQnnSwBiQ" target="_blank" rel="noreferrer">
                  <Image className={styles.logo}
                      src={youtubeIcon} 
                      alt="/"
                      height="37"
                    />
                </a>
              </div>
            </div>
          </div>

        </div>

        <p className={styles.gray}>©Hazel Wang</p>
        

      </footer>
      
    
  )
}