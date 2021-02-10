import React from 'react'
import {useHistory} from 'react-router-dom'

import api from '../services/api'

export default function MenuBar(){
    const history = useHistory()
    
    function Logout(){
            api.get('logout')
        setTimeout(()=>{
            history.push("/")
        },1000)
    }

    return(
        <button onClick={Logout}>Sair</button>
    )
}