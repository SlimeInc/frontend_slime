import React from 'react'
import styles from './Exchange.module.scss'
import {MdOutlineError} from 'react-icons/md'

const ErrorMessage = ({id ,...props}) => {
    let message;
    switch (id) {
        case 'asset': message = `${props.value} is not in your wallet`;
        break;
        case 'amount': message = `invalid amount ${props.value}`;
        break;
        default:
          
            message=`invalid`
    }
  return (
     <div className={styles.error}><MdOutlineError/> {message}</div>
  )
}

export default ErrorMessage