import React from 'react'
import styles from "./Button.module.scss"
import {Inter} from "next/font/google"
import { HiArrowLongRight } from 'react-icons/hi2';

const inter = Inter({subsets: ["latin"]});

function Button() {
  return (
    <div className={inter.className}>
        <div className={styles.buttonContainer}>
            <div className={styles.circle}></div>
            <div className={styles.title}>
                <p>Book Now</p>
            </div>
            <HiArrowLongRight size={20} className={styles.icon}/>
        </div>
    </div>

    

  )
}

export default Button