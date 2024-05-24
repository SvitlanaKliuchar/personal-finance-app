//the state manager in this application
//this is where all our states and functions that alter that state will exist

import { createContext } from "react";

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
    updateRecord: (id: string, newRecord: FinancialRecord) => void
    deleteRecord: (id: string) => void
}

export const FinancialRecordsContext = createContext<FinancialRecordsContextType | undefined>(undefined)
//create interface for fin records context