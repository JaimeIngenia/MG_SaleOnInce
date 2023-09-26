import React from 'react'
import styles from '../styles/CreditCart.module.css'
import credits from '../../../assets/credits.svg'
import { InputCart } from '../../../components/InputCart/InputCart'
import arrow_btn from '../../../assets/arrow__right.svg'

export const CreditCart = (props) => {
  return(
    <>
        <div className={styles.containers}>

            <img src={credits} alt="" />

            <form className={styles.form__cart}  action="">

                <InputCart label={`Cardholder name`} placeholder={`Rebecca soto`} />

                <InputCart label={`Card number`} placeholder={`9999 8888 9999 0909`} />

                <div className={styles.divide__inputs}>
                
                    <div className={styles.part}>
                        <InputCart className={styles.divide__inputs__part} 
                        label={`Exp date`} placeholder={`02/2022`} />
                    </div>

                    <div className={styles.part}>
                        <InputCart className={styles.divide__inputs__part} 
                        label={`CVC`} placeholder={`123`} />
                    </div>

                </div>
                
                <br /><br /><br />

                <button className={styles.button} >

                    <div className={styles.checkout}>

                        <div className={styles.container__p}>

                            <p>$1,672</p>
                        </div>

                        <div className={styles.box__right}>

                            <p>Checkout</p>
                            <img src={arrow_btn} alt="" />
                        </div>


                    </div>


                </ button >
                
                <br /><br />

            </form>

        </div>
    
    </>
   )
  }
