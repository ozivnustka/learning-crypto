import React, { Component } from 'react';
import { getBlocks } from '../../data'
import BlockChainTable from '../../components/BlockChainTable'
import { PageContainer } from '../../componentsStyled/Shared'

export default class Blockchain extends Component {
  state = {
    blocks: []
  };

  componentDidMount(){
    getBlocks()
    .then(blocks => this.setState({ blocks }))
    .catch(err => console.log(err));
   }

  render() {
    const { blocks }  = this.state

    return (
      <PageContainer>
        <h1>Blockchain</h1>
        <BlockChainTable blocks={blocks} />
      </PageContainer>
    )
  }
}