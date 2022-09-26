import styles from "../styles/Home.module.scss";
import Kofi from "../public/images/Kofi.jpg";
import { TeamMember } from "./TeamMember";
const TeamSection = () => {

  return (
    <div className={styles.TeamSection}>
<h2> Meet Our team</h2>
<div className={styles.teamGallery}>
<TeamMember name='Kofi' src='/images/Kofi.jpg' about='Project Manager'/>
<TeamMember name='Biney' src='/images/Biney.jpg' about='Frontend Developer'/>
<TeamMember name='Osae' src='/images/Osae.jpg' about='Backend Developer'/>

</div>
    </div>
  );
};

export default TeamSection;
{/* <div className={styles.TeamkSection_photo}>
<img src='images/logos_metamask-icon.png' layout="intrinsic"></img>
</div> */}