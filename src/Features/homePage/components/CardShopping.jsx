import React from 'react'
import styles from '../styles/CardShopping.module.css'
import arrow from '../../../assets/arrow.svg'
import up__down from '../../../assets/up__down.svg'
import garbage from '../../../assets/garbage.svg'
import skates from '../../../assets/skates.svg'



export const CardShopping = (props) => {
  return(
    <>

        <div className={styles.container}>

            <div className={styles.card__sale}>

                <div className={styles.card__sale__left}>

                    <img className={styles.image__product} src={skates} alt="" />

                    <div className={styles.card__sale__left__text}>
                        <h1>MSI MPG Trident 3 :</h1>
                        <p>MSI MPG Trident 3 10SC-005AU Intel i7 10700F</p>

                        <div className={styles.card__sale__left__text__count}>
                            <p>1</p>
                            <img src={up__down} alt="" />
                        </div>
                        
                    </div>
                </div>


                <div className={styles.card__sale__right}>

                    <img src={garbage} alt="" />
                    <p>$681</p>
                </div>

            </div>

        </div>
    </>
   )
  }
