import {BrowserRouter, Switch, Route} from 'react-router-dom'


import Orders from './views/orders'
import CreateCep from './views/createCep'
import Users from './views/users'



function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Orders}/>
            <Route path="/cep/create" exact component={CreateCep}/>
            <Route path="/users" exact component={Users}/>
        </Switch>
    );
}

export default Routes;