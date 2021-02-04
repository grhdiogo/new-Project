import React from 'react'

import Routes from '../routes'
import '../styles/navBar.css'
import SideBar from './sideBar'

export default function Layout(){
    return(
        <div id="body">

            <div id="sideBar">
                <SideBar/>
            </div>

            <div id="header">
                
            </div>

            <div id="content">
                 <Routes/>
            </div>

        </div>
        
        
    )
}