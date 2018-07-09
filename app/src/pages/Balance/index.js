import React, { Component } from 'react';
import { getBalance } from '../../data'
import BalanceTable from '../../components/BalanceTable'
import { PageContainer } from '../../componentsStyled/Shared'

export default class Blockchain extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    getBalance()
      .then(items => this.setState({ items }))
      .catch(err => console.log(err));
  }

  render() {
    const { items }  = this.state

    return (
      <PageContainer>
        <h1>Balance</h1>
        <BalanceTable items={items} />
      </PageContainer>
    )
  }
}