//the state manager in this application
//this is where all our states and functions that alter that state will exist

import React, { createContext, useContext, useState } from "react";

interface FinancialRecord {
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

    const addRecord = (record: FinancialRecord) => {


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