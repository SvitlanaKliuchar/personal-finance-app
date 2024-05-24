//the state manager in this application
//this is where all our states and functions that alter that state will exist

import { useUser } from "@clerk/clerk-react";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface FinancialRecord {
    id?: string
    userId: string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    paymentMethod: string;
}

interface FinancialRecordsContextType {
    records: FinancialRecord[]
    addRecord: (record: FinancialRecord) => void
    // updateRecord: (id: string, newRecord: FinancialRecord) => void
    // deleteRecord: (id: string) => void
}


export const FinancialRecordsContext = createContext<FinancialRecordsContextType | undefined>(undefined)

//inside the provider we create all the functions that alter records (see context interface) 
//and pass it inside value={}
export const FinancialRecordsProvider = ({children}: {children: React.ReactNode}) => {
    const [records, setRecords] = useState<FinancialRecord[]>([])

    const {user} = useUser()
    const fetchRecords = async () => {
        if (!user) return
        const response = await fetch(`http://localhost:3001/financial-records/getAllByUserId/${user.id}`)
        
        if (response.ok) {
            const records = await response.json()
            console.log(records)
            setRecords(records)
        }
    }

    useEffect(() => {
        fetchRecords()
    }, [user])

    const addRecord = async (record: FinancialRecord) => {
        const response = await fetch("http://localhost:3001/financial-records", {
            method:"POST", 
            body:JSON.stringify(record),
            headers: {
                "Content-Type":"application/json"
            }
        } )
        try {
            if (response.ok) {
                const newRecord = await response.json()
                setRecords((prev) => [...prev, newRecord])
            }
        } catch (error) {
            
        }
    }
    return <FinancialRecordsContext.Provider value={{records, addRecord}}>
        {children}
    </FinancialRecordsContext.Provider>
} 

export const useFinancialRecords = () => {
    const context = useContext<FinancialRecordsContextType | undefined>(FinancialRecordsContext)
    if (!context) {
        throw new Error("useFinancial records must be used within a FinancialRecordsProvider")
    }
    return context
}

