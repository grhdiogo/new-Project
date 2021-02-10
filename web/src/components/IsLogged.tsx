import React,{useEffect, useState} from 'react'

import api from '../services/api'

function IsLogged(){
    const [isLogged, setLogin] = useState(Boolean)
    
    useEffect(()=>{
        api.get('isLogged').then((res)=>{
            setLogin(res.data)
        })
    })
    return(
        isLogged
    )
}

export {IsLogged}