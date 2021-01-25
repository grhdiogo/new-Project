import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react'

import Login from './views/login'
import Back from './views/back'
function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/login" component={Back}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;