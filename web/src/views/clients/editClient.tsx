import React,{useEffect, useState, FormEvent} from 'react'
import api from '../../services/api'
import { useParams } from 'react-router-dom'
import {Link, useHistory} from 'react-router-dom'

interface Params{
    id:string;
}

interface Client{
    id:number;
    username:string;
    password:string;
    cpf_cnpj: number;
    nickname: string;
    name:string;
    lastName:string;
    birthday:string;
    telephone:number;
    telephone2:number;
    number:number;
    complement:string
    cep:{
        id:number;
        zipCode:string;
        country:string;
        state:string;
        zone:string;
        street:string;
    }
}


export default  function EditClient(){
    const history = useHistory()
    const params = useParams<Params>()
    const [client,setClient] = useState<Client>()

    const [id, setId] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpf_cnpj, setCpf_Cpnj] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [nickname, setNickname] = useState('')
    const [birthday, setBirthday] = useState('')
    const [telephone, setTelephone] = useState('')
    const [telephone2, setTelephone2] = useState('')
    const [cepId, setCepId] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')

    useEffect(()=>{
        api.get(`user/${params.id}`).then(res=>{
           setClient(res.data)
           setId(res.data.id)
           setUsername(res.data.username)
           setPassword(res.data.password)
           setCpf_Cpnj(res.data.cpf_cnpj)
           setName(res.data.name)
           setLastName(res.data.lastName)
           setNickname(res.data.nickname)
           setBirthday(res.data.birthday)
           setTelephone(res.data.telephone)
           setTelephone2(res.data.telephone2)
           setCepId(res.data.cep.id)
           setNumber(res.data.number)
           setComplement(res.data.complement)
        })
    },[params.id])

    if(!client){
        return(<p>Carregando...</p>)
    }

    async function submit(event: FormEvent){
        event.preventDefault()
        
     
        const data = {id,username,password,cpf_cnpj,name,lastName,nickname,birthday,telephone,telephone2,cepId,number,complement}
        const dataString = JSON.stringify(data)
        const jsonData = JSON.parse(dataString)

        
        await api.post('updateUser', jsonData)

        alert("Usuário alterado")
        history.push("/")
        
        
    }


    return(
        <div>
            <form>
                
                <input id="id" defaultValue={client.id} type="hidden"></input><br/>

                <label>Login</label>
                <input id="username"  value={username} onChange={event => setUsername(event.target.value)}></input><br/>

                <label>Senha</label>
                <input id="password" value={password} onChange={event => setPassword(event.target.value)}></input><br/>

                <label>Cpf / Cnpj</label>
                <input id="cpf_cppj" value={cpf_cnpj} onChange={event => setCpf_Cpnj(event.target.value)}></input><br/>

                <label>Nome</label>
                <input id="name" value={name} onChange={event => setName(event.target.value)}></input><br/>

                <label>Sobrenome</label>
                <input id="lastName" value={lastName} onChange={event => setLastName(event.target.value)}></input><br/>

                <label>Identificador</label>
                <input id="nickname" value={nickname} onChange={event => setNickname(event.target.value)}></input><br/>

                <label>Data de Nascimento</label>
                <input id="birthday" value={birthday} onChange={event => setBirthday(event.target.value)}></input><br/>

                <label>Telefone</label>
                <input id="telephone" type="number" value={telephone} onChange={event => setTelephone(event.target.value)}></input><br/>

                <label>Celular</label>
                <input id="telephone2" type="number" value={telephone2} onChange={event => setTelephone2(event.target.value)}></input><br/>

                <br/>
               <input id="cepId" type="hidden" value={username}  onChange={event => setCepId(event.target.value)}></input><br/>

                <label>Cep</label>
                <input id="zipCode"  defaultValue={client.cep.zipCode}></input><br/>

                <label>País</label>
                <input id="country" defaultValue={client.cep.country}></input><br/>

                <label>Estado</label>
                <input id="state" defaultValue={client.cep.state}></input><br/>

                <label>Bairro</label>
                <input id="zone" defaultValue={client.cep.zone}></input><br/>

                <label>Rua</label>
                <input id="street" defaultValue={client.cep.street}></input><br/>

                <label>Número</label>
                <input id="number" type="number" value={number} onChange={event => setNumber(event.target.value)}></input><br/>

                <label>Complemento</label>
                <input id="complement" value={complement} onChange={event => setComplement(event.target.value)}></input><br/>

                <input type="submit" value="Enviar" onClick={submit}/><br/>
                    <div>
                        <Link to="/" >Voltar</Link>
                    </div>
            </form> 
        </div>
    )
}