import React from 'react'

function login(){
    return(
        <form action="/login" method="get">
            <input type="text" id="username"/><br/>
            <input type="password" id="password"/><br/>
            <input type="submit" value="Enviar"/><br/>
        </form>
    )
}
export default login