import Link from 'next/link'
import React from 'react'
import styles from './button.module.css'
export default function Button({children,link,onClick}) {
  if(link){

    return (
      <Link href={link} className={styles.btn}>{children}</Link>
      )
    }else{
      return (
        <button onClick={onClick} className={styles.btn}>{children}</button>
        )

    }
}
