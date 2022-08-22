import { CgArrowTopRight, CgArrowBottomRight } from "react-icons/cg";
const ItemChange = ({ value }) => {
  return (
    <div>
      {Number(value) > 0 ? (
        <CgArrowTopRight color="green" />
      ) : (
        <CgArrowBottomRight color="red" />
      )}
      {value}
    </div>
  );
};

export default ItemChange;
