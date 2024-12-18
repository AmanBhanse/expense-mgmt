import { useEffect, useState } from "react";
import { Transaction } from "../../components/transaction";
import { CreateTransaction } from "../../components/create-transaction";

const tmp = [
    {
        amount: 2500,
        created: new Date(),
        title: "Restaurant",
        description: "3 people dined at the restaurant",
        category: "FOOD",
        isIncome: true,
        attachments: [],
    },
    {
        amount: 2500,
        created: new Date(),
        title: "Groceries",
        description: "Potato, Tomato",
        category: "FOOD",
        isIncome: false,
        attachments: ["a"],
    },
];

export const Transactions = () => {
    const [allTransactions, setAllTransactions] = useState([]);

    // useEffect(() => {
    //     if (allTransactions.length > 0) return;
    //     setAllTransactions(tmp);
    // }, [allTransactions]);

    return (
        <>
            <CreateTransaction allTransactions={allTransactions} setAllTransactions={setAllTransactions} />
            <div className="container-fluid">
                <div className="row lead py-3">
                    <div className="col">Expenses</div>
                    <div className="col text-end">
                        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="bi-plus-lg"></i>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-hover border rounded">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Dated</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Attachments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allTransactions.map((expense, index) => (
                                    <Transaction key={index} index={index + 1} {...expense} allTransactions={allTransactions} setAllTransactions={setAllTransactions} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
