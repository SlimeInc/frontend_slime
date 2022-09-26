import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";



const testContextData = () => {
    
    const { connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction } = useContext(TransactionContext)
    
    const handleSubmit = (e) => {
       const { addressTo, amount, keyword, message } = formData
       
       e.preventDefault() //prevent auto-refresh after submission

       if (!addressTo || !amount || !keyword || !message) return;

       sendTransaction()
    }


    console.log(currentAccount)
    return (
        <div>
            <h2>Test Data Injected From the Smart contract ABI</h2>

            {!currentAccount && (
                <button
                    type="button"
                    onClick={connectWallet}

                >
                    <p>Connect Wallet</p>
                </button>
            )}

            <div>
                <input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                <input placeholder="Amount (Eth)" name="amount" type="number" handleChange={handleChange} />
                <input placeholder="Keyword" name="keyword" type="text" handleChange={handleChange} />
                <input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
                

                <div>
                    {false ? (
                        <Loader></Loader>
                    ) : (
                        <button
                            type="button"
                            onClick={handleSubmit}
                        >
                            Send Now
                        </button>
                    )}
                </div>
            </div>

        </div>
    )

}

export default testContextData;