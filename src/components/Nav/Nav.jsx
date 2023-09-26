import styles from './Nav.module.css';
import React from 'react'
// images
import headerBlack from '../../assets/headerBlack.svg'
import logo from '../../assets/logo.svg'
import inputSearch from '../../assets/inputSearch.svg'
import car from '../../assets/car.svg'
import carCircle from '../../assets/carCircle.svg'
import profile from '../../assets/profile.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'


// import headerBlack from '../../../assets/headerBlack.svg'
// import logo from '../../../assets/logo.svg'
// import inputSearch from '../../../assets/inputSearch.svg'
// import car from '../../../assets/car.svg'
// import carCircle from '../../../assets/carCircle.svg'
// import profile from '../../../assets/profile.svg'
// import facebook from '../../../assets/facebook.svg'
// import instagram from '../../../assets/instagram.svg'

export const Nav = (props) => {
  return(
    <>
      <div className={styles.container}>
        <div className={styles.container__image}>
          {/* <img src={headerBlack} alt="" /> */}

          <div className={styles.parrafos}>

            <p>Mon-Thu:  9:00 AM - 5:30 PM</p>

            <p>Visit our showroom in 1234 Street Adress City Address, 1234  Contact Us</p>

            <p>Call Us: (00) 1234 5678</p>
          </div>


          <div className={styles.social__networks}>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
          </div>


        </div>

        <div className={styles.container__nav}>

          <img src={logo} alt="" className={styles.container__nav__logo} />
          <img src={inputSearch} className={styles.container__nav__input} alt="" />

          <div className={styles.container__right}>

            <div className={styles.container__car}>

              <img src={car} alt="" />
              
              <div className={styles.container__car__circle}  >
                2
              </div>

            </div>

            <img src={profile} alt="" />
          </div>


        </div>


      </div>
    
    </>
    
   )
  }


