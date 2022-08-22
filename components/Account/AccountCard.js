import React from "react";

const AccountCard = (coin) => {
  return (
    <div>
      <h3>{`${coin.ranking} ${coin.name}`}</h3>
      <div>
        {`price: ${coin.price}`}
        {`Market cap : ${coin.MarketCap}`}
        {`daily price change : ${coin.change}`}
      </div>
    </div>
  );
};

export default AccountCard;
