
import React from 'react'
import BalanceRow from './BalanceRow'
import './style.css'

const BalanceTable = ({items}) => (
    <table>
        <tr>
            <th>Name</th>
            <th>Blocks mined</th>
            <th>Amount</th>
        </tr>
        {items.map(item => 
            ( <BalanceRow {...item}/>)
        )}
    </table>   
)
export default BalanceTable
