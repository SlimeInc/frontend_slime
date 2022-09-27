import  styles from './Account.module.scss'


const ItemIcon = ({ coin_icon_url , coin_name,coin_link}) => {
  return (
    <a className={styles.item_icon} href={coin_link}>
      <img src={coin_icon_url} width={26}/>
      {coin_name}  
    </a>
  );
};

export default ItemIcon;
