import styles from "../components/Main.module.scss";
import InputField from "./InputField";
import Connector from "./Connector";

const ExchangeForm = () => {
  return (
    <form className={styles.exchange_form}>
      <label htmlFor="amount" className={styles.form_label}>
        {" "}
        How much would you like to send ?
      </label>
      <InputField name="amount" type="text" placeholder="Amount" id="amount"  dropdown={true}/>
      <Connector />
      <InputField
        name="address"
        type="text"
        placeholder="address"
        id="address"
      />
      <Connector />
      <InputField
        name="message"
        type="textArea"
        placeholder="message"
        id="message"
      />
    </form>
  );
};

export default ExchangeForm;
