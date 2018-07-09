import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Blockchain from '../../pages/Blockchain'
import UploadBlock from '../../pages/UploadBlock'
import Transactions from '../../pages/Transactions'
import Balance from '../../pages/Balance'
import Definition from '../../pages/Definition'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/definition' component={Definition}/>
      <Route path='/blockchain' component={Blockchain}/>
      <Route path='/upload-block' component={UploadBlock}/>
      <Route path='/transactions' component={Transactions}/>
      <Route path='/balance' component={Balance}/>
    </Switch>
  </main>
)

export default Main
