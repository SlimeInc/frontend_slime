import  styles from './Account.module.scss'


const ItemIcon = ({ coin_icon_url , coin_name}) => {
  return (
    <div className={styles.item_icon}>
      <img src={coin_icon_url} width={26}/>
      {coin_name}  
    </div>
  );
};

export default ItemIcon;
