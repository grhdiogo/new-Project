import React from 'react'
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";
import {IsLogged} from '../components/IsLogged'
import SideBar from '../components/sideBar'
import MenuBar from '../components/MenuBar'

import '../styles/layout.css'

function Route({ restrict = false, component: Component, ...rest }) {
    const isLogged = IsLogged()

  return (
        <ReactDOMRoute {...rest} render={(props)=>(
            restrict === false
                ? <Component {...props}/>
                : isLogged === true
                ? 
                    <div id="body">
                        <div id="sideBar">
                            <SideBar/>
                        </div>
                        <div id="header">
                            <MenuBar/>
                        </div>
                        <div id="content">
                        <Component {...props}/>
                        </div>
                    </div>

                :  <Redirect to={"/"}/>
        )}/>
  )}

export default Route;