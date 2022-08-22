import { CgDollar } from "react-icons/cg";
import millify from "millify";

const ItemDollar = ({ wallet }) => {
  return (
    <div>
      <CgDollar />
      {millify(wallet)}
    </div>
  );
};

export default ItemDollar;
