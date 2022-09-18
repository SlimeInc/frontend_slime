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
        </div>
    )

}

export default TestContractData;