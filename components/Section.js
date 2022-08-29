import styles from "../styles/Home.module.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";
const Section = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {amount:0.2})

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])
  return <div ref={ref} >{children}</div>;
};

export default Section;



