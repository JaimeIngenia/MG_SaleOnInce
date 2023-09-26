import React from 'react'
import styles from '../styles/ShoppingCar.module.css'
import arrow from '../../../assets/arrow.svg'
import up__down from '../../../assets/up__down.svg'
import garbage from '../../../assets/garbage.svg'
import skates from '../../../assets/skates.svg'
import { CardShopping } from './CardShopping'
import { TitleCard } from '../../../components/titleCard/TitleCard'
import { CreditCart } from './CreditCart'

export const ShoppingCar = (props) => {
  return(
    <>
    
        <div className={styles.container2}>

            <div className={styles.container__titles}>

                <div className={styles.container__titles__part}>
                    <TitleCard title={`Shopping Continue`} image={arrow}/>
                </div>

                <div className={styles.container__titles__part}>
                    <TitleCard title={`Shopping Cart`} image={``}/>
                </div>

            </div>


<br /><br /><br />


            <div className={styles.container}>
               
                <div className={styles.container__left}>

                    <CardShopping/>
                    <CardShopping/>
                    <CardShopping/>
                    <CardShopping/>
                </div>

                <div className={styles.container__right}>
                    
                    <CreditCart/>
                </div>
            </div>


            <br /><br />


        </div>

    </>
   )
  }
