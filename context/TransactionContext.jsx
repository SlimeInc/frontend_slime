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
    const [currentAccount, setCurrentAccount] = useState('')
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' })
    
    //dynamically update formData
    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
    }


    const checkForWalletConnection = async () => {
        try {
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

            const accountsAvailable = await ethereum.request({ method: 'eth_requestAccounts' })

            setCurrentAccount(accountsAvailable[0])
        } catch (error) {
            console.log(error)

            throw new Error("No ethereum object")
        }
    }


    const sendTransaction = async () => {
        
    }

    //this runs only at the start of the program
    useEffect(() => {
        checkForWalletConnection()
    }, [])

    return (
        <TransactionContext.Provider value = {{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
            { children }
        </TransactionContext.Provider>
    )
}