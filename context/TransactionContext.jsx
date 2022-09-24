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
        console.log("Window object:", window)
        console.log("Ethereum object:", ethereum)

    }, [])

    //dynamically update formData
    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
    }

    const getAllTransactions = async () => {
        try {
            
        } catch (error) {
            console.alert("Ethereum object not detected.")
        }
    }

    const checkForWalletConnection = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask")
    
            const accountsAvailable = await ethereum.request({ method: 'eth_accounts' })
            // console.log('Eth accts available:', accountsAvailable)

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
            const transactionHash = await transactionContract.addToBlockChain(addressTo, convertedAmount, message, keyword)
            
            setIsLoading(true)
            console.log(`Loading - ${transactionHash.hash}`)

            await transactionHash.wait()

            setIsLoading(false)
            console.log(`Success - ${transactionHash.hash}`)

            const transactionCount = await transactionContract.getTransactionCount()
            setTransactionCount(transactionCount.toNumber())

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
        <TransactionContext.Provider value = {{ 
            connectWallet, currentAccount, 
            formData, setFormData, 
            handleChange, sendTransaction 
            }}
        >
            { children }
        </TransactionContext.Provider>
    )
}