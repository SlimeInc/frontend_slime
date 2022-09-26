import React from 'react'
import styles from '../styles/Home.module.scss'

export const TeamMember = ({src , name , about}) => {
  return (
    <div className={styles.teamMember}>
         <div className={styles.avatar_pic}>
        {" "}
        <img src={src} layout="intrinsic"></img>
      </div>
      <h2>
        {name}
      <span>{about}</span>
      </h2>
    </div>
  )
}
