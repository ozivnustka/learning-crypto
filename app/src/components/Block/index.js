import React from 'react'
import BlockLabel from './BlockLabel'

const Block = data => (
    <div>
        <BlockLabel name="index" value={data.index} />
        <BlockLabel name="mined by" value={data.minedBy} />
        <BlockLabel name="previous hash" value={data.previousHash} />
        <BlockLabel name="hash" value={data.hash} />
        <BlockLabel name="nonce" value={data.nonce} />
    </div>   
)
export default Block