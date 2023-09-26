import React from 'react'
import styles from './InputCart.module.css'

/**
* @author
* @function 
**/

export const InputCart = (props) => {
  return(
    <>

        <div className={styles.container__input}>
            
            <input type="text" 
            placeholder={props.placeholder} />
            <label className={styles.lbl__nombre} >
                <span className={styles.txt__nombre} > {props.label} </span>
            </label>
        </div>
    
    </>
   )
  }
