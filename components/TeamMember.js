import React from 'react'
import styles from '../styles/Home.module.scss'

export const TeamMember = ({src , name}) => {
  return (
    <div className={styles.teamMember}>
         <div className={styles.avatar_pic}>
        {" "}
        <img src={src} layout="intrinsic"></img>
      </div>
      <span>{name}</span>
    </div>
  )
}
