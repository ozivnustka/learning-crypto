
import React from 'react'
import TransactionRow from './TransactionRow'
import './style.css'

const TransactionsTable = ({transactions}) => (
    <table>
        <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Date</th>
        </tr>
        {transactions.map(transaction => 
            ( <TransactionRow {...transaction}/>)
        )}
    </table>   
)
export default TransactionsTable
