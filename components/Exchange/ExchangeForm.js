import styles from "./Exchange.module.scss";
import InputField from "./InputField";
import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputSelect from "./InputSelect";

const wallet = {
  ETH: { amt: "27" },
  USDT: { amt: "27567" },
  SOL: { amt: "34" },
};

const ExchangeForm = () => {
  const [field, showField] = useState({
    amount: 0,
    asset: "",
    address: "",
    message: "",
  });
  // useEffect(() => {
  //   console.log(field.asset.toString());
  //   console.log(wallet.hasOwnProperty(field.asset.toUpperCase()), visit.amount);
  // }, [field.asset]);
  const FormSchema = Yup.object().shape({
    asset: Yup.string().oneOf(Object.keys(wallet)).required("asset required"),
    amount: Yup.number().max(
      wallet[Yup.ref('asset')]?.amt,
      "exceeded maximum amount"
    ).min(0,'invalid amount'),
    address: Yup.mixed().required("receiver address required"),
  });

  return (
    <div className={styles.exchange_form}>
      {" "}
      <h2>Exchange Form</h2>
      <Formik
        initialValues={field}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {(papya) => (
          <div>
            {console.log(`papaya`,papya.values)}
            <Form>
              <InputField
                name="asset"
                type="select"
                placeholder="asset"
              />
              <InputSelect
                name="amount"
                type="text"
                placeholder="amount"
                id="amount"
              />
              <InputSelect
                name="address"
                type="text"
                placeholder="address"
                id="address"
              />
              <InputSelect
                name="message"
                type="textArea"
                placeholder="message"
                id="message"
              />
              <button type="submit" className={styles.send}>
                SEND
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ExchangeForm;
// <form className={styles.exchange_form} onSubmit={HandleSubmit}>
//   <label htmlFor="Select_asset" className={styles.form_label}>
//     {" "}
//   </label>
// <InputField
//   name="Select_asset"
//   type="text"
//   placeholder="asset"
//   id="Select_asset"
//   setdropdown={setdropdown}
//   dropdown={dropdown}
//   showField={showField}
//   value={field.asset}
//   field={field}
// />
//   <DropdownMenu
//     dropdown={dropdown}
//     setdropdown={setdropdown}
//     showField={showField}
//     field={field}
//   />
//    <Connector />

// <InputSelect
//   name="amount"
//   type="text"
//   placeholder="amount"
//   id="amount"
//   value={field.amount}
//   field={field}
//   showField={showField}
// />

//  <Connector />

// <InputSelect
//   name="address"
//   type="text"
//   placeholder="address"
//   id="address"
//   value={field.address}
//   field={field}
//   showField={showField}
// />

//    <Connector />

// <InputSelect
//   name="message"
//   type="textArea"
//   placeholder="message"
//   id="message"
//   field={field}
//   required={false}
//   showField={showField}
// />

// <button type="submit" className={styles.send}>
//   SEND
// </button>

// </form>
