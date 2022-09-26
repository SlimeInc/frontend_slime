import { useState, useContext } from 'react'
import AvatarSection from './AvatarSection'
import SidebarLinks from './SidebarLinks'
import styles from './Sidebar.module.scss'
import Metamask_icon from '../public/images/logos_metamask-icon.png'

import { TransactionContext } from '../context/TransactionContext'
export const Sidebar = () => {
  const {currentAccount} = useContext(TransactionContext)
  
  const [name, setName] = useState(currentAccount)

  return (
    <div className={styles.sidebar}>
        <AvatarSection pic={Metamask_icon} name={name}/>
        <SidebarLinks/>
            
    </div>
  )
}
