import React,{useEffect, useState, FormEvent} from 'react'
import api from '../../services/api'
import { useParams } from 'react-router-dom'
import {Link, useHistory} from 'react-router-dom'
import Select from 'react-select'

interface Params{
    id:string;
}


interface Cep{
    id:number;
    zipCode:string;
    country:string;
    state:string;
    zone:string;
    street:string;
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
    const [ceps, setCeps] = useState<Cep[]>([])

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
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')

    const [cepId, setCepId] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [street, setStreet] = useState('')
    const [zipCode, setZipcode] = useState('')
    const [zone, setZone] = useState('')

    useEffect(()=>{
        api.get(`user/${params.id}`).then(res=>{
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
           setZipcode(res.data.cep.zipCode)
           setCountry(res.data.cep.country)
           setState(res.data.cep.state)
           setZone(res.data.cep.zone)
           setStreet(res.data.cep.street)
        })
        api.get('cepsList').then(res=>{
            setCeps(res.data)
        })
    },[params.id])

    if(!id){
        return(<p>Carregando...</p>)
    }
    
    const options = [{}]

    for (let i = 0; i < ceps.length; i++) {
        options[i]={value:ceps[i].id,label:ceps[i].zipCode}
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

    function changeCep(value){
        if(value!=null){
            ceps.forEach(cep=>{
                if(cep.id===value.value){
                    setCountry(cep.country)
                    setZone(cep.zone)
                    setStreet(cep.street)
                    setZone(cep.zone)
                    setZipcode(cep.zipCode)
                    setCepId(value.value)
                    
                }
            })
        }
    }


    return(
        <div>
            <form>
                <input id="id" defaultValue={id} type="hidden"></input><br/>

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
               <input id="cepId" type="hidden" value={cepId}  onChange={event => setCepId(event.target.value)}></input><br/>

                <label id="zipCode">Cep: </label><Select options={options} onChange={changeCep} placeholder={zipCode}/>
                <label id="country">{'País: '+country}</label><br/>
                <label id="state">{'Estado: '+state}</label><br/>
                <label id="zone">{'Bairro: '+zone}</label><br/>
                <label id="street">{'Rua: '+street}</label><br/>
                


                <label>Número</label><input id="number" type="number" value={number} onChange={event => setNumber(event.target.value)}></input><br/>

                <label>Complemento</label>
                <input id="complement" value={complement} onChange={event => setComplement(event.target.value)}></input><br/>

                <input type="submit" value="Enviar" onClick={submit}/>
                    <div>
                        <Link to="/" >Voltar</Link>
                    </div>
            </form> 
        </div>
    )
}