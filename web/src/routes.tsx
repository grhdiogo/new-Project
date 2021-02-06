import {BrowserRouter, Switch, Route} from 'react-router-dom'


import Orders from './views/orders'
import CreateCep from './views/createCep'
import Users from './views/clients'
import EditClient from './views/clients/editClient'



function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Orders}/>
            <Route path="/cep/create" exact component={CreateCep}/>
            <Route path="/users" exact component={Users}/>
            <Route path="/client/:id" exact component={EditClient}/>
        </Switch>
    );
}

export default Routes;