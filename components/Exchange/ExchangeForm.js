import styles from "../Main.module.scss";
import InputField from "./InputField";
import Connector from "./Connector";
import DropdownMenu from "./DropdownMenu";
import { useState, useEffect } from "react";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import { fa } from "faker/lib/locales";
import InputSelect from "./InputSelect";

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
    address: false,
    message: false,
  });
  useEffect(() => {
    console.log(field.asset.toString());
  }, [field.asset]);

  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      amount: 0,
      address: "",
      message: "",
    },
    validationSchema: Yup.object({
      Select_asset: Yup.string().required("Required"),
      amount: Yup.number()
        .max(20, "Not enough funds in your wallet")
        .required("Required"),
      address: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
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
        Isdropdown={true}
        setDropdown={setdropdown}
        showField={showField}
        disabled={true}
        value={field.asset}
        field={field}
      />
      <DropdownMenu
        dropdown={dropdown}
        setDropdown={setdropdown}
        showField={showField}
        field={field}
      />
      {field.amount && <Connector />}
      <InputSelect
        name="amount"
        type="text"
        placeholder="amount"
        id="amount"
        Isdropdown={false}
        disabled={field.amount}
        value={field.amount}
        field={field}
      />
      {typeof field.amount == "number" && field.amount > 0 <= wallet ? (
        () => showField({ ...field, address: true })
      ) : (
        <div>error</div>
      )}
      {field.address && <Connector />}
      <InputSelect
        name="address"
        type="text"
        placeholder="address"
        id="address"
        disabled={field.address}
        Isdropdown={false}

      />
      {field.address ? (
        () => showField({ ...field, message: true })
      ) : (
        <div>error</div>
      )}
      {field.message && <Connector />}
      {
        <InputSelect
          name="message"
          type="textArea"
          placeholder="message"
          id="message"
          disabled={field.message}
          required={false}
          Isdropdown={false}

        />
      }
      <InputField button={true} disabled={field.message} />
    </form>
  );
};

export default ExchangeForm;
