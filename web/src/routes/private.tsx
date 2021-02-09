import React,{useEffect, useState} from 'react'
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

import api from '../services/api'

function Route({ restrict = false, component: Component, ...rest }) {
    const [isLogged, setLogin] = useState(Boolean)
    
    useEffect(()=>{
        api.get('isLogged').then((res)=>{
            setLogin(res.data)
            console.log(isLogged)
            
        })
    })

  return (
        <ReactDOMRoute {...rest} render={(props)=>(
            restrict === false
                ? <Component {...props}/>
                : isLogged === true
                ? <Component {...props}/>
                :  <Redirect to={"/"}/>
        )}/>
  )}

export default Route;