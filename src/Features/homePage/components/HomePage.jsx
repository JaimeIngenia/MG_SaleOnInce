import React from 'react'
import principalPhoto from '../../../assets/principalPhoto.svg'
import styles from '../styles/HomePage.module.css';
import { Card } from '../components/Card';


export const HomePage = (props) => {
  return(
    <>

    <div className={styles.container}>

      <img  src={principalPhoto} className={styles.principalPhoto} alt="" />
      
      <div className={styles.container__cards}>
            
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>

    </div>
    
    </>
   )
  }
