import React, { Component } from 'react';
import { getTransactions } from '../../data'
import TransactionsTable from '../../components/TransactionsTable'
import { PageContainer } from '../../componentsStyled/Shared'

export default class Blockchain extends Component {
  state = {
    transactions: []
  };

  componentDidMount() {
    getTransactions()
      .then(transactions => this.setState({ transactions }))
      .catch(err => console.log(err));
  }

  render() {
    const { transactions }  = this.state

    return (
      <PageContainer>
        <h1>Transactions</h1>
        <TransactionsTable transactions={transactions} />
      </PageContainer>
    )
  }
}