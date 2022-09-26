import React, { useState, useEffect, useContext } from "react";

import { TransactionContext } from "../../context/TransactionContext";
import styles from "./Exchange.module.scss";


const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);


const ExchangeForm = () => {
  const { connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction } = useContext(TransactionContext)
  
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData
    
    e.preventDefault() //prevent auto-refresh after submission

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction()
  }

  return (
    <div  className={styles.exchange_form}>
      <Input 
        placeholder="Address To" 
        name="addressTo" 
        type="text" 
        handleChange={handleChange} 
        className={styles.input_fields}
      />
      <Input 
        placeholder="Amount (Eth)" 
        name="amount" 
        type="number" 
        handleChange={handleChange} 
      />
      <Input 
        placeholder="Keyword" 
        name="keyword" 
        type="text" 
        handleChange={handleChange} 
      />
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
              >
                  SEND
              </button>
          )}
      </div>
    </div>
  );
};

export default ExchangeForm;
