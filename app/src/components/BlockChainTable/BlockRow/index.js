import React from 'react'
import BlockLabel from '../BlockLabel'

const Block = data => {
    console.log(data)
    
    return(
    <tr>
        <td>{data.index}</td>
        <td>{data.minedBy}</td>
        <td>{data.data}</td>
        <td>
            <BlockLabel name="previous" value={data.previousHash} />
            <BlockLabel name="hash" value={data.hash} />
        </td>
        <td>{data.nonce}</td>
    </tr>   
)}
export default Block