
import React from 'react'
import BlockRow from './BlockRow'
import './style.css'

const BlockChainTable = ({blocks}) => (
    <table>
        <tr>
            <th>Index</th>
            <th>Mined by</th>
            <th>Data</th>
            <th>Previous hash / hash</th>
            <th>Nonce</th>
        </tr>
        {blocks.map(block => 
            ( <BlockRow {...block}/>)
        )}
    </table>   
)
export default BlockChainTable

