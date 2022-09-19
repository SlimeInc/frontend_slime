  import { useState } from 'react'
import AvatarSection from './AvatarSection'
import SidebarLinks from './SidebarLinks'
import styles from './Sidebar.module.scss'
import Metamask_icon from '../public/images/logos_metamask-icon.png'

export const Sidebar = () => {
const [name, setName] = useState('Metamask Wallet')

  return (
    <div className={styles.sidebar}>
        <AvatarSection pic={Metamask_icon} name={name}/>
        <SidebarLinks/>
            
    </div>
  )
}
