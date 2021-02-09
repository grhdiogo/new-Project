import React,{FormEvent, useState} from 'react'
import api from '../services/api'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'

export default function Login(){
    Axios.defaults.withCredentials = true;
    const history = useHistory()
    const [user, setUsername] = useState('')
    const [pass, setPassword] = useState('')
    const [state, setState] = useState('')

    async function submit(event: FormEvent){
        event.preventDefault()
        
        const data = {user,pass}
        const dataString = JSON.stringify(data)
        const jsonData = JSON.parse(dataString)
        
        api.post('login',jsonData).then(res=>{
            if(res.data==true){
                setState('Usuário logado')
                setTimeout(() => {
                    history.push("/clients")
                },1000);
                
            }else{
                setState('Usuário ou senha inválidos')
            }
         })
    
        
    }
    

    return(
        <div>
            <form>
                <label>Usuário: </label><input onChange={event => setUsername(event.target.value)}></input><br/>
                <label>Senha: </label><input type="password" onChange={event => setPassword(event.target.value)}></input>
                <input type="submit" value="Enviar" onClick={submit}/><br/>
                <br/>
                {state}
            </form>
        </div>
    )
}
