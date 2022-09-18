import styles from "./Exchange.module.scss";
import DropDownItem from "./DropDownItem";
import { useField } from "formik";

const wallet = {
  ETH: { amt: "27" },
  USDT: { amt: "27567" },
  SOL: { amt: "34" },
};
const DropdownMenu = ({ props }) => {
  console.log(`dr`, props);
  const HandleClick = () => {
    // const value = children.toString().slice(0, -2);
    props.setdropdown(false);
  };
  const [field, meta] = useField({ name: "asset" , type:"select" });
  console.log(`field`, field ,`meta`,meta);

  return (
    <input className={styles.dropdown_content} {...field} >
      {Object.keys(wallet).map((asset) => (
        <option value={asset} onClick={HandleClick} key={asset.toString()}>
          {asset}
        </option>
      ))}
    </input>
  );
};

export default DropdownMenu;
{
  /* <Field name="color" as="select">
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
</Field>; */
}
