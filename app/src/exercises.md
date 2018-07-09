
# Mining for Krakonos coin 

The challenge it to mine and create some Krakonos coin.

## Steps:

1. Validate the genesis coin
1. Mine a new coin / block
1. Upload to the first (and only) Krakonos coin node.
1. Create a coin / block with some transactions.
1. Send Adam some coins!

# Step 1 - Validate the genesis coin
Try and generate the hash for the genesis coin. 
See https://krakonos-coin.herokuapp.com/specification
 (The Genesis Block)' for details on the genesis coin and how to generate the hash.

Hint: Write a function that when passed the block values (in a record type?) returns the hash as a string. Does this hash match the hash in the specification for the genesis block?

# Step 2 - Mine a new coin / block
Try and generate a new coin that has the genesis block hash as the parent hash value. It's a case of trying different _nonce_ values until you fine a valid hash that starts with four 0's. Typically it takes a few thousand attempts. 

_Note_: I'd guess that statistically you'd need to try on average ~32,000. 2 bytes => 2^16 / 2 => 32000

Hint: Call the function you wrote in step 1 with new block values. Use your name as the _minedBy_ value - so we can tell who's mined what. You can put anything in the _data_ value (such as _'hello'_ we're not going to use it yet.) Set the index to 1. Set the _previousHash_ to the hash of the genesis block. 

Try different _nonce_ values until you find one where the hash starts with four zero's. If you find one, congratulations this is a new valid Krakonos coin! Also you've earnt yourself one new shiny Krakonos coin.

# Step 3 - Upload a coin

Mine and upload the **next** coin on the BlockChain server.

You'll need to find the latest block and mine new coin with that as the parent hash and index. You can get the latest block here:
https://krakonos-coin.herokuapp.com/blockchain

# Step 4 - Block with Transactions

Now mine another coin, but this time we'll add some transactions to the _data_ field. See the specification for the format of this.

Why not give one of your coins to 'Adam'. I'm sure he'll appreciate it. Set the _from_ = [your miner name]), _to_ = 'Adam' and _amount_ = 1. Upload it, and you should see it in the last block chain, and in the transactions here:

https://krakonos-coin.herokuapp.com/transactions

# Further steps

## Which blockchain has been hacked?

We have got three different blockchains (it is different chain than Krakonos coin) and we think one of them has been tampered with. Which one is it?

### Blockchain 1

0 Genesis Genesis 0 52458 000021C1766F55BD5D413F0AC128A5D3D6B50E4F0D608B653209C4D468232C11

1 Bob  000021C1766F55BD5D413F0AC128A5D3D6B50E4F0D608B653209C4D468232C11 62582 0000C013D0421BEB9CBC3D1815E1D3BB8306686E4393587C14D59E048147CF65

2 Bob Transaction,Bob,Adam,2 0000C013D0421BEB9CBC3D1815E1D3BB8306686E4393587C14D59E048147CF65 39634 0000471881100D0DCD9FB75FD1C29472C343D75EDDF8AC71B171E4D70B654BB3

3 Bob Transaction,Adam,Eve,1 0000471881100D0DCD9FB75FD1C29472C343D75EDDF8AC71B171E4D70B654BB3 193 00008DF3DADD797DBEAD297D06C44B6DAFE20D5B66B41695F7A0C1EAF5D9FCCF

4 Adam Transaction,Adam,Eve,1 00008DF3DADD797DBEAD297D06C44B6DAFE20D5B66B41695F7A0C1EAF5D9FCCF 62298 0000F37FF424744E78C9AE7E3B4AE8C7B65443647C013FB8824354B11A2DF199

### Blockchian 2

0 Genesis Genesis 0 52458 000021C1766F55BD5D413F0AC128A5D3D6B50E4F0D608B653209C4D468232C11

1 Alice  000021C1766F55BD5D413F0AC128A5D3D6B50E4F0D608B653209C4D468232C11 115760 0000E5DA31601CB5101689B5D5168041CF84DBC1F89B2C50F29DD0BC970B84ED

2 Alice Transaction,Alice,Bob,2 0000E5DA31601CB5101689B5D5168041CF84DBC1F89B2C50F29DD0BC970B84ED 150794 0000C0946747983F1626AB192F0EDCD6DE09EC469DD1997D9037BFDB7028EE2E

3 Alice Transaction,Alice,Bob,1 0000C0946747983F1626AB192F0EDCD6DE09EC469DD1997D9037BFDB7028EE2E 131107 0000054C5D3D424A35DC5355E17F25FC59DE5D130EF0CAFCC49650DFC526D53C

4 Mallory Transaction,Bob,Mallory,2 0000054C5D3D424A35DC5355E17F25FC59DE5D130EF0CAFCC49650DFC526D53C 261735 0000FFD633A14A7C68F70A1158452BCCB9E8D994B509149DE57C1D11D0199B32

### Blockchain 3

0 Genesis Genesis 0 52458 000021C1766F55BD5D413F0AC128A5D3D6B50E4F0D608B653209C4D468232C11

1 Fred Transaction,Fred,Adam,1 000021C1766F55BD5D413F0AC128A5D3D6B50E4F0D608B653209C4D468232C11 91625 0000308F9AE054122E917BB79D989720B36B1D5D8DA59A0FB4B70E691EC9A1DE

2 Adam Transaction,Adam,Sally,2 0000308F9AE054122E917BB79D989720B36B1D5D8DA59A0FB4B70E691EC9A1DE 66798 0000C6B521DC6E03CF831E6D43603A4F0684C7DE161898D3D4FEE85F4248A736

## Can you validate and calculate balances in the block chain?

1. Download the blockchain from the server - see REST API below.
1. Validate each block in the chain.
1. Calculate the miner balances from the block. Iterate through the blocks giving +1 coin to each miner for each block they have mined.
1. And Apply all the transactions in the blockchain to the balances for each miner.

## More zeros
Try settings the difficulty harder (e.g. more zeros). How long does it take to mine?

# REST API

## Return the latest block

https://krakonos-coin-api.herokuapp.com/blocks/last

## Return all the blocks 

https://krakonos-coin-api.herokuapp.com/blocks

The challenge it to mine and create some Krakonos coin