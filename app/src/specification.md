
# The Krakonos Blockchain Specification

## Block

A block is defined as the following fields:
* index : int
* minedBy : string (just alphanumeric characters with no spaces)
* data : string
* previousHash : string
* nonce: int
* hash : string

The _hash_ value is the SHA-256 hash of all the fields concatenated (excluding the _hash_) with a single space between as an lower case hex string (see example below).

## First block (The Genesis Block)
The first block is called the genesis block. It is special as it has no parent block. It is defined as:
* index = 0
* minedBy = "Genesis"
* data = "Genesis"
* previousHash = "0";
* nonce = 34974605
* hash = "00009cd78f528225f8acace1d507e045c0f8b3b086f8c241595abd7b45856ca0"

So the concatenated block values used to generate the hash are:
```
0 Genesis Genesis 0 34974605
```
Which generates the following SHA256 hash value (which is converted to text in **lowercase**):

```
00009cd78f528225f8acace1d507e045c0f8b3b086f8c241595abd7b45856ca0
```

## Next block

Subsequent block must meet the following criteria:

* _index_ + 1 of the previous block's _index_
* _minedBy_ is the name of the block miner (your name / id). Must be a simple alpha-numeric with not spaces
* _data_ is any arbitrary data to store in the block - (this would be any transactions in this block for bitcoin)
* _previousHash_ is the hash of the previous block
* _nonce_ (the nonsense number) a number which can be changed to make a valid hash (see below)
* _hash_ of the block starts with 4 zeros. If it is not valid, try another nonce value! This is the proof of work to earn your Krakonos coin.

## Transactions

The data in a block may contain optional transactions. If it starts with "Transaction" it is considered to contain some transactions with the following format:

```
Transaction,<from miner name>,<to miner name>,<integer amount>
```
### Transaction Example

```
Transaction,Adam,Dave,1
```

A block can have multiple transactions, separated by a ``\n`` character (and not a ``\r\n``.)

```
Transaction,Adam,Dave,5
Transaction,Fred,Betty,2
```

## Transactions Notes

* **No** whitespace padding
* _Transactions_ are separated by a single _\n_ (And **not** a ``\r\n``).
* The last _transaction_ does **not** have a trailing `\n`
* Obey the _minedBy_ name rules (**alpha-numeric only**) for _from_ and _to_ fields.
* _Ammount_ in a transaction is in whole number of coins.
* There are no rules on transactions. No validation on who is sent or received any coin (which may be a little insecure - but we're a trusting bunch right?) I'm sure in the future we'd use a public key or something for the _minerName_ and some crypto-magic to make sure only the public key owner can send someone money. Watch this space.

# Full Example Block with transactions

## Block
```
index = 4
minedBy = Dave
data = Transaction,Dave,Fred,1\nTransaction,Dave,Bob,2 
previousHash = 0000bb90efa982455cf3e59c80c18ef3df187eacb6ccfdff0b0daab31513e6da;
nonce = 4996
hash = 0000e169b1028e6cfb895ee6e587f6c319af353b98c1e4a3d51beedc15331baa
```

## String for sha-256 hash
```
4 Dave Transaction,Dave,Fred,1\nTransaction,Dave,Bob,2 0000bb90efa982455cf3e59c80c18ef3df187eacb6ccfdff0b0daab31513e6da 4996
```
Which hashes to:
```
0000e169b1028e6cfb895ee6e587f6c319af353b98c1e4a3d51beedc15331baa
```