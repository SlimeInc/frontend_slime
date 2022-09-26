import styles from "../styles/Home.module.scss";
import { TeamMember } from "./TeamMember";
const TeamSection = () => {
  return (
    <div className={styles.TeamSection}>
      <h2> Meet Our team</h2>
      <div className={styles.teamGallery}>
        <TeamMember name="Kofi" about="Project Manager">
          <div className={styles.avatar_pic}>
            <img src="/images/Kofi.jpg" layout="intrinsic"></img>
          </div>
          <h2>
            Kofi
            <span>Project Manager</span>
          </h2>
        </TeamMember>
        <TeamMember>
          <div className={styles.avatar_pic}>
            <img src="/images/Biney.jpg" layout="intrinsic"></img>
          </div>
          <h2>
            Biney <span>Frontend Developer</span>
          </h2>
        </TeamMember>
        <TeamMember>
          <div className={styles.avatar_pic}>
            <img src="/images/Osae.jpg" layout="intrinsic"></img>
          </div>
          <h2>
            Osae<span>Backend Developer</span>
          </h2>
        </TeamMember>
      </div>
    </div>
  );
};

export default TeamSection;
{
  /* <div className={styles.TeamkSection_photo}>
<img src='images/logos_metamask-icon.png' layout="intrinsic"></img>
</div> */
}
