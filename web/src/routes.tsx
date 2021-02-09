import {Switch} from 'react-router-dom'
import React from 'react'

import Orders from './views/orders'
import CreateCep from './views/createCep'
import Clients from './views/clients'
import EditClient from './views/clients/editClient'
import Login from './views/login'

import Route from './routes/private'

export default  function Routes(){
   
    return (
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/cep/create" exact component={CreateCep} restrict/>
            <Route path="/clients" exact component={Clients} restrict/>
            <Route path="/client/:id" exact component={EditClient} restrict/>
            <Route path='/orders' component={Orders} restrict/>
        </Switch>
    );
}

