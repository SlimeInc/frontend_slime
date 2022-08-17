import styles from '../styles/Home.module.scss'

export const ImageHolder = ({pic}) => {
  return (
    <div className={styles.ImgHolder}>{pic}</div>
  )
}
