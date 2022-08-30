import styles from "./Exchange.module.scss";
import DropDownItem from "./DropDownItem";

const wallet = {
  ETH: { amt: "27" },
  USDT: { amt: "27567" },
  SOL: { amt: "34" },
};
const DropdownMenu = ({  dropdown, setdropdown ,showField ,field}) => {
  console.log(dropdown, Object.keys(wallet));
  return (
    dropdown && (
      <div className={styles.dropdown_content}>
        {Object.keys(wallet).map((asset) => (
          <DropDownItem
            key={asset.toString()}
            setdropdown={setdropdown}
            showField={showField}
            field={field}
          >
            {asset}{" "}
          </DropDownItem>
        ))}
      </div>
    )
  );
};

export default DropdownMenu;
