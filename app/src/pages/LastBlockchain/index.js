import React, { Component } from 'react';
import { getLastBlock } from '../../data'
import Block from '../../components/Block'
import { PageContainer } from '../../componentsStyled/Shared'

export default class LastBlockchain extends Component {
  state = {
    lastBlock: {
      hash: null
    }
  };

  componentDidMount() {
    getLastBlock()
      .then(lastBlock => this.setState({ lastBlock }))
      .catch(err => console.log(err));
  }

  render() {
    const { lastBlock}  = this.state
    return (
      <PageContainer>
        <h1>Last block in blockchain</h1>
        <Block {...lastBlock}/>
      </PageContainer>
    )
  }
}