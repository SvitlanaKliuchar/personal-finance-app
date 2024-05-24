import React, {useState} from 'react'
import { useUser } from '@clerk/clerk-react'
import { useFinancialRecords } from '../../contexts/fin-record-context'

export const FinRecordForm = () => {
    const [description, setDescription] = useState<string>("")
    const [amount, setAmount] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [paymentMethod, setPaymentMethod] = useState<string>("")
    const {addRecord} = useFinancialRecords()
    
    const {user} = useUser()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault()

       const newRecord = {
        userId: user?.id ?? "",
        date: new Date(),
        description: description,
        amount: parseFloat(amount),
        category: category,
        paymentMethod: paymentMethod
       }
       
       addRecord(newRecord)

       setDescription("")
       setAmount("")
       setCategory("")
       setPaymentMethod("")
       

    }

    return (<div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label>Description:</label>
                <input type="text" className="input" required value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="form-field">
                <label>Amount:</label>
                <input type="text" className="input" required value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className="form-field">
                <label>Category:</label>
                <select className="input" required value={category} onChange={(e) => setCategory(e.target.value)} >
                    <option value="">Select a category</option>
                    <option value="Food">Food</option>
                    <option value="Rent">Rent</option>
                    <option value="Salary">Salary</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-field">
                <label>Payment Method:</label>
                <select className="input" required value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Cash">Cash</option>
                </select>
            </div>
            <button type="submit" className="button">Add record</button>

        </form>
    </div>)

}