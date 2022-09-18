import styles from "./Sidebar.module.scss";

const AvatarSection = ({ pic, name }) => {
  return (
    <div className={styles.avatar_section}>
      <div className={styles.avatar_pic}>
        {" "}
        <img src={pic} layout="intrinsic"></img>
      </div>
      <span>{name}</span>
    </div>
  );
};

export default AvatarSection;
