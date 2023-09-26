import React from 'react'
import styles from '../styles/Card.module.css';
import stock__active from '../../../assets/stock__active.svg'
import image__product from '../../../assets/products/elbow.svg'
import add from '../../../assets/add.svg'


export const Card = (props) => {
  return(
    <>
        <div className={styles.container}>
            <div className={styles.in__stock}>
                <img src={stock__active} alt="" />
                <p>in stock</p>
            </div>

            <div className={styles.image_product}>
                <img src={image__product} alt="" />
            </div>

            <div className={styles.title__description}>
                <h6>EX DISPLAY :</h6>
                <h6> MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On </h6>
            </div>


            <h6 className={styles.previous__price} >
                <strike>
                    $499.00
                </strike>
            </h6>
            <h5 className={styles.price} >$499.00</h5>

            <img className={styles.add} src={add} alt="" />







        </div>
    
    </>
   )
  }
