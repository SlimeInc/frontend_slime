import Image from "next/image";
import styles from "./Sidebar.module.scss";

const AvatarSection = ({ pic, name }) => {
  return (
    <div className={styles.avatar_section}>
      <div className={styles.avatar_pic}>
        {" "}
        <Image src={pic} layout="intrinsic"></Image>
      </div>
      <span>{name}</span>
    </div>
  );
};

export default AvatarSection;
