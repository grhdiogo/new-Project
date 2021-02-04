import React,{useState,FormEvent} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../services/api'


export default function CreateCep(){
    const history = useHistory()

    const [zipCode, setZipCode] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [zone, setZone] = useState('')
    const [street, setStreet] = useState('')

    async function submit(event: FormEvent){
        event.preventDefault()
     
        const data = {zipCode,country,state,city,zone,street}
        const dataString = JSON.stringify(data)
        const jsonData = JSON.parse(dataString)

        
        //await api.post('createCep', jsonData)

        alert("CEP cadastrado")
        history.push("/")
        
        
    }

    return(
       <div>
           <div>
                <form>
                    <h1>Novo Cep</h1>
                    <label>Cep</label><input id="zipCode" value={zipCode} onChange={event => setZipCode(event.target.value)}/><br/>
                    <label>País</label><input id="country" value={country} onChange={event => setCountry(event.target.value)}/><br/>
                    <label>Estado</label><input id="state" value={state} onChange={event => setState(event.target.value)}/><br/>
                    <label>Cidade</label><input id="city" value={city} onChange={event => setCity(event.target.value)}/><br/>
                    <label>Bairro</label><input id="zone" value={zone} onChange={event => setZone(event.target.value)}/><br/>
                    <label>Rua</label><input id="street" value={street} onChange={event => setStreet(event.target.value)}/><br/>
                    <input type="submit" value="Enviar" onClick={submit}/><br/>
                    <div>
                        <Link to="/" ><FiArrowLeft size={30}/></Link>
                    </div>
                </form>
           </div>
       </div>
       
            
        
    )
}