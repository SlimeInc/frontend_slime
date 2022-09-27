import React, { useEffect, useState} from 'react'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = React.createContext()


//fetch our ethereum contract
const getEthContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)
    
    console.log('Provider, Signer, tContract:',{
        provider, 
        signer,
        transactionContract
    })

    return transactionContract
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('')
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' })
    const [isLoading, setIsLoading] = useState(false)
    const [transactions, setTransactions] = useState([])
    const [transactionCount, setTransactionCount] = useState(0) //cache transactionCount in localStorage.getItem('transactionCount')

    useEffect(() => {
        const { ethereum } = window; //obtain ethereum object from metamask

        setTransactionCount(localStorage.getItem("transactionCount"))

        console.log("Window object:", window)
        console.log("Ethereum object:", ethereum)

    }, [])

    //dynamically update formData
    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
    }

    const getAllTransactions = async () => {
        try {
            if(!ethereum){
                return alert("Please install Metamask")
            }
            const transactionContract = getEthContract()
            const currentTransactions = await transactionContract.getAllTransactions()
            const organizedTransactions = currentTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10**18)
            }))
            console.log("Organized Transactions: ", organizedTransactions)
            setTransactions(organizedTransactions)
        } catch (error) {
            console.log("getAllTransactions() error: ", error)
        }
    }

    const checkForWalletConnection = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask")
    
            const accountsAvailable = await ethereum.request({ method: 'eth_accounts' })
            // console.log('Eth accts available:', accountsAvailable)

            if (accountsAvailable.length) {
                setCurrentAccount(accountsAvailable[0])

                getAllTransactions()
            }else {
                console.alert("No accounts found")
                throw new Error("No ethereum object")
            }
            console.log("Accts available: ", accountsAvailable)
            
        } catch (error) {
            console.log(error)
        }
    }

    const checkIfTransactionsExist = async () => {
        try {
            const transactionContract = getEthContract()
            const transactionCount = await transactionContract.getTransactionCount()
            console.log("transactions count: ", transactionCount)
            window.localStorage.setItem("transactionCount", transactionCount);
        } catch (error) {
            console.log("checkIfTransactionsExist error: ", error)
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask!")

            const accountsAvailable = await ethereum.request({ method: 'eth_requestAccounts' })

            setCurrentAccount(accountsAvailable[0])
        } catch (error) {
            console.log(error)

            throw new Error("No ethereum object")
        }
    }

    //Send transactions & store transaction data
    const sendTransaction = async () => {
        try {
            console.log("sendTransaction is fired")
            if (!ethereum) return alert("Please install Metamask")

            //retrieve the form data from a page
            const { addressTo, amount, keyword, message } = formData

            //retrieve data on a transaction
            const transactionContract = getEthContract()

            //convert input amount to Gwei or Hex
            const convertedAmount = ethers.utils.parseEther(amount)

            //send transaction
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208', //21000 Gwei
                    value: convertedAmount._hex, 
                }]
            })

            //store transaction on the blockchain
            const transactionHash = await transactionContract.addToBlockchain(addressTo, convertedAmount, message, keyword)
            
            setIsLoading(true)
            console.log(`Loading - ${transactionHash.hash}`)

            await transactionHash.wait()

            setIsLoading(false)
            console.log(`Success - ${transactionHash.hash}`)

            const transactionCount = await transactionContract.getTransactionCount()
            setTransactionCount(transactionCount.toNumber())
            window.location.reload()

        } catch (error) {
            console.log("Send Transaction error: ", error)
        }
    }

    //this runs only at the start of the program
    useEffect(() => {
        checkForWalletConnection();
        checkIfTransactionsExist();
    }, [])

    return (
        <TransactionContext.Provider value = {{ 
            connectWallet, 
            currentAccount, 
            formData, setFormData, 
            handleChange, 
            sendTransaction,
            transactions, getAllTransactions, 
            }}
        >
            { children }
        </TransactionContext.Provider>
    )
}