import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";



const TestContractData = () => {
    
    const { connectWallet, currentAccount } = useContext(TransactionContext)
    
    console.log(currentAccount)
    return (
        <div>

            {!currentAccount && (
                <button
                    type="button"
                    onClick={connectWallet}

                >
                    <p>Connect Wallet</p>
                </button>
            )}

            <div>
                <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                <Input placeholder="Amount (Eth)" name="amount" type="number" handleChange={handleChange} />
                <Input placeholder="Keyword" name="keyword" type="text" handleChange={handleChange} />
                <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

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

export default TestContractData;