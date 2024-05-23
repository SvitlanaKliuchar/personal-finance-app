import React, {useState} from 'react'
import { useUser } from '@clerk/clerk-react'

export const FinRecordForm = () => {
    const [description, setDescription] = useState<string>("")
    const [amount, setAmount] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [paymentMethod, setPaymentMethod] = useState<string>("")
    
    const {user} = useUser()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault()

       const newRecord = {
        userId: user?.id,
        date: new Date(),
        description: description,
        amount: parseFloat(amount),
        category: category,
        paymentMethod: paymentMethod
       }
    }

    return (<div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label>Description:</label>
                <input type="text" className="input" required />
            </div>
            <div className="form-field">
                <label>Amount:</label>
                <input type="text" className="input" required />
            </div>
            <div className="form-field">
                <label>Category:</label>
                <select className="input" required>
                    <option value="">Select a category</option>
                    <option value="">Food</option>
                    <option value="">Rent</option>
                    <option value="">Salary</option>
                    <option value="">Utilities</option>
                    <option value="">Entertainment</option>
                    <option value="">Other</option>
                </select>
            </div>
            <div className="form-field">
                <label>Payment Method:</label>
                <select className="input" required>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Cash">Cash</option>
                </select>
            </div>
            <button type="submit" className="button">Add record</button>

        </form>
    </div>)

}