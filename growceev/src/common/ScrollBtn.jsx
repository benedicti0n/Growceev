import React, { useEffect } from 'react';
import { HiArrowLongDown } from "react-icons/hi2";
import styles from "./ScrollBtn.module.scss";

function ScrollBtn() {

    useEffect(() => {
        const text = document.querySelector(`.${styles.text} p`);
        text.innerHTML = text.innerText.split("").map(
          (char, i) =>
            `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
        ).join('');
      }, []);

  return (
    <>
    <div className={styles.circle}>
        <div className={styles.text}>
            <p>SCROLL DOWN - SCROLL DOWN - </p>
        </div>
        <div className='cursor-pointer border border-black w-[100px] h-[100px] flex justify-center items-center'>
            <HiArrowLongDown size={30}/>
        </div>
    </div>

    </>
  )
}

export default ScrollBtn