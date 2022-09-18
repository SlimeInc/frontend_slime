import React, { useEffect, useState} from 'react'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = React.createContext()

const { ethereum } = window; //obtain ethereum object from metamask


//fetch our ethereum contract
const getEthContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)
    console.log({
        provider, 
        signer,
        transactionContract
    })
}

export const TransactionProvider = ({ children }) => {
    const [connectedAccount, setConnectedAccount] = useState(initialState)

    const checkForWalletConnection = async () => {
        if (!ethereum) return alert("Please install Metamask")
    
            const accountsAvailable = await ethereum.request({ method: 'eth_accounts' })

            if (accountsAvailable.length) {
                setCurrentAccount(accountsAvailable[0])

                //getAllTransactions()
            }else {
                console.log("No accounts found")
                throw new Error("No ethereum object")
            }
            console.log(accountsAvailable)
            
        } catch (error) {
            console.log(error)
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask")

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)

            throw new Error("No ethereum object")
        }
    }

    //this runs only at the start of the program
    useEffect(() => {
        checkForWalletConnection()
    }, [])

    return (
        <TransactionContext.Provider value = {{ value: 'test' }}>
            { children }
        </TransactionContext.Provider>
    )
}