import React, { useState, useEffect, useContext } from "react";

import { TransactionContext } from "../../context/TransactionContext";
import styles from "./Exchange.module.scss";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <div className={styles.input_field_div}>
    <input
      // placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
    />
    <span className={styles.floating_label}> {placeholder}</span>
  </div>
);

const ExchangeForm = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    setFormData,
    handleChange,
    sendTransaction,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault(); //prevent auto-refresh after submission

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
  console.log("Current wallet: ", currentAccount);

  return (
    <div className={styles.exchange_form}>
      <form>
      <h3>Transfer tokens </h3>
        <Input
          placeholder="Address To"
          name="addressTo"
          type="text"
          handleChange={handleChange}
        />
        <Input
          placeholder="Amount (Eth)"
          name="amount"
          type="text"
          handleChange={handleChange}
        />
        {/* <Input
          placeholder="Keyword"
          name="keyword"
          type="text"
          handleChange={handleChange}
        /> */}
        <Input
          placeholder="Enter Message"
          name="message"
          type="text"
          handleChange={handleChange}
        />

        <div>
          {false ? (
            <Loader></Loader>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className={styles.send}
            >
              SEND
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

// export default ExchangeForm;

// import styles from "./Exchange.module.scss";
// import InputField from "./InputField";
// import { useState, useEffect } from "react";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import InputSelect from "./InputSelect";

// const wallet = {
//   BTC: { amt: "27" },
//   USDT: { amt: "27567" },
//   SOL: { amt: "34" },
// };

// const ExchangeForm = () => {
//   const [field, showField] = useState({
//     amount: 0,
//     asset: "",
//     address: "",
//     message: "",
//   });
//   // useEffect(() => {
//   //   console.log(field.asset.toString());
//   //   console.log(wallet.hasOwnProperty(field.asset.toUpperCase()), visit.amount);
//   // }, [field.asset]);
//   const FormSchema = Yup.object().shape({
//     asset: Yup.string().oneOf(Object.keys(wallet)).required("asset required"),
//     amount: Yup.number()
//       .max(wallet["BTC"]?.amt, "exceeded maximum amount")
//       .min(0, "invalid amount"),
//     address: Yup.mixed().required("receiver address required"),
//   });

//   return (
//     <div className={styles.exchange_form}>
//       {" "}
//       <h2>Exchange Form</h2>
//       <Formik
//         initialValues={field}
//         validationSchema={FormSchema}
//         onSubmit={(values) => {
//           // same shape as initial values
//           console.log(values);
//         }}
//       >
//         {(papya) => (
//           <div>
//             {console.log(`papaya`, papya.values)}
//             <Form >
//               <InputField name="asset" type="select" placeholder="asset" />
//               <InputSelect
//                 name="amount"
//                 type="text"
//                 placeholder="amount"
//                 id="amount"
//               />
//               <InputSelect
//                 name="address"
//                 type="text"
//                 placeholder="address"
//                 id="address"
//               />
//               <InputSelect
//                 name="message"
//                 type="textArea"
//                 placeholder="message"
//                 id="message"
//               />
//               <button type="submit" className={styles.send}>
//                 SEND
//               </button>
//             </Form>
//           </div>
//         )}
//       </Formik>
//     </div>
//   );
// };

export default ExchangeForm;
