import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef , useEffect} from "react";
const Section = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {amount:0.2})

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])
  return <motion.div ref={ref} className={styles.section}  >{children}</motion.div>;
};

export default Section;



