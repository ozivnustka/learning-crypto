import React from 'react'

const TransactionRow = data => (
    <tr>
        <td>{data.from}</td>
        <td>{data.to}</td>
        <td>{data.amount}</td>
        <td>{data.createdAt}</td>
    </tr>   
)
export default TransactionRow