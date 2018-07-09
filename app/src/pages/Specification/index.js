import React, { Component } from 'react';
import { PageContainer } from '../../componentsStyled/Shared'
import  ReactMarkdown from 'react-markdown'

export default class Specification extends Component {
  state = {
    markdown: null
  };

  componentWillMount() {
    const definitionPath = require("../../specification.md");
  
    fetch(definitionPath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: text
        })
      })
  }
  
  render() {
    const { markdown }  = this.state

    return (
    <PageContainer>
       <ReactMarkdown source={markdown}  />
    </PageContainer>
    )
  }
}