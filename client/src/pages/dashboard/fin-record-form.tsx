

export const FinRecordForm = () => {
    

    return (<div className="form-container">
        <form >
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