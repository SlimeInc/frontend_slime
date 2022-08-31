import React from "react";

const AccountCard = ({name,price,MarketCap,change,ranking}) => {
  return (
    <div>
      <h3>{name}</h3>
      <div>
         <span>{price}</span>
        {/* {`Market cap : ${coin.MarketCap}`}
        {`daily price change : ${coin.change}`} */}
      </div>
    </div>
  );
};

export default AccountCard;
