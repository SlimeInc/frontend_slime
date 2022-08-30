import styles from "./Exchange.module.scss";
import InputField from "./InputField";
import Connector from "./Connector";
import DropdownMenu from "./DropdownMenu";
import { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
// import { useFormik, Field } from "formik";
// import * as Yup from "yup";
// import { fa } from "faker/lib/locales";
import InputSelect from "./InputSelect";
import vi from "faker/lib/locales/vi";

const wallet = {
  ETH: { amt: "27" },
  USDT: { amt: "27567" },
  SOL: { amt: "34" },
};

const ExchangeForm = () => {
  const [dropdown, setdropdown] = useState(false);
  // const [asset, setAsset] = useState("");
  const [field, showField] = useState({
    amount: 0,
    asset: "",
    address: "",
    message: "",
  });
  const [visit, setvisit] = useState({
    asset: true,
    amount: false,
    address: false,
    message: false,
  });
  useEffect(() => {
    console.log(field.asset.toString());
    console.log(wallet.hasOwnProperty(field.asset.toUpperCase()),visit.amount)
  }, [field.asset]);

  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.exchange_form} onSubmit={HandleSubmit}>
      <label htmlFor="Select_asset" className={styles.form_label}>
        {" "}
        How much would you like to send ?
      </label>
      <InputField
        name="Select_asset"
        type="text"
        placeholder="asset"
        id="Select_asset"
        setdropdown={setdropdown}
        dropdown={dropdown}
        showField={showField}
        value={field.asset}
        field={field}
      />
      <DropdownMenu
        dropdown={dropdown}
        setdropdown={setdropdown}
        showField={showField}
        field={field}
      />
      { (wallet.hasOwnProperty(field.asset.toUpperCase()) ? 
          () => {setvisit(({ ...visit, 'amount': true }))}
         : (
          <ErrorMessage id="asset" />
        ))}

      {visit.amount && <Connector />}

      {visit.amount && (
        <InputSelect
          name="amount"
          type="text"
          placeholder="amount"
          id="amount"
          disabled={!visit.amount}
          value={field.amount}
          field={field}
          showField={showField}
        />
      )}
      {typeof field.amount == "number" &&
      field.amount > 0 <= wallet[field.asset ]? (
        () => setvisit({ ...visit, address: true })
      ) : (
        <ErrorMessage id="amount" />
      )}
      {visit.address && <Connector />}
      {visit.address && (
        <InputSelect
          name="address"
          type="text"
          placeholder="address"
          id="address"
          disabled={!visit.address}
          value={field.address}
          field={field}
          showField={showField}
        />
      )}
      {visit.address ? (
        () => setvisit({ ...visit, message: true })
      ) : (
        <ErrorMessage id="address" />
      )}
      {visit.message && <Connector />}
      {visit.message && (
        <InputSelect
          name="message"
          type="textArea"
          placeholder="message"
          id="message"
          disabled={!visit.message}
          value={field.address}
          field={field}
          required={false}
          showField={showField}
        />
      )}
      {visit.message && (
        <button type="submit" className={styles.send}>
          SEND
        </button>
      )}
    </form>
  );
};

export default ExchangeForm;
