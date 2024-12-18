const padStart = (number = 0, length = 2) => {
    return number.toString().padStart(length, "0");
};
const toString = (date = new Date()) => {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].map(padStart).join("-");
};

export const Transaction = props => {
    const { index, amount, created, title, description, category, isIncome, attachments, id , allTransactions , setAllTransactions} = props;
    
    const deleteTransaction = (id) => {
        // Filter out the transaction with the given ID

        //DB Logic

        const updatedTransactions = allTransactions.filter(
            (transaction) => transaction.id !== id
        );
    
        // Update the state
        setAllTransactions(updatedTransactions);
    }

    return (
        <tr className={isIncome ? "table-success" : "table-danger"}>
            <th scope="row">{index}</th>
            <td title={created.toISOString()}>{toString(created)}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td>
                <button className="btn btn-sm btn-primary">{attachments.length}</button>
            </td>
            <td>
                <button className="btn btn-sm btn-primary btn-danger" onClick={() => { deleteTransaction(id)} }>DELETE</button>
            </td>
        </tr>
    );
};
