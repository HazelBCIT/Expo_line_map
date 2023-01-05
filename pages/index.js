import React from 'react';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Map from '../components/Map';
import Header from '../components/header';
import Footer from '../components/footer';
import Divider from '@mui/material/Divider';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
      <Header />
      <main className={styles.main}>
      
        <div className={styles.header}>
          SkyTrain (Expo Line) Stations
        </div>
        <div className={styles.body}>
          Expo Line connects Downtown Vancouver with the cities of Burnaby, New Westminster, and Surrey.
        </div>
        
        <Map/>

        <div className={styles.text}>
          <Divider></Divider>
          <br />
          <div className={styles.header_02}>
            Expo Line
          </div>

          <div className={styles.body}>
            The Expo Line operates two routes:
            <br />
            <br />
            <ul className={styles.list}>
              <li>Waterfront Station (Downtown Vancouver) to King George Station (Surrey)</li>
              <li>Waterfront Station (Downtown Vancouver) to Production Way–University Station (Burnaby)   </li>
            </ul>

            <br />
            Transfer to the Millennium Line at the following stations:
            <br />
            <br/>
            <ul className={styles.list}>
              <li>Commercial–Broadway Station</li>
              <li>Lougheed Town Centre Station</li>
              <li>Production Way–University Station</li>
            </ul>
            <br />
              Use Columbia Station to transfer to and from a train going to either King George or Production Way–University.
            <br />
            <br />
              Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.
          </div>
        </div>
      </main>
      <Footer />

  </>
  
  )
}
