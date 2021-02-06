import React,{useEffect, useState} from 'react'
import api from '../services/api'
import {VscGear} from 'react-icons/vsc'
import { Link } from 'react-router-dom'



interface Clients{
    id:number;
    cpf_cnpj: number;
    nickname: string;
    name:string;
    lastName:string;
}

export default function Users(){
    const [clients, setClientes] = useState<Clients[]>([])

    useEffect(()=>{
        api.get('usersList').then(res=>{
           setClientes(res.data)
        })
    })


    return(
       <div>
           <table>
               <thead>
                   <tr>
                       <th>Cpf/Cnpj</th>
                       <th>Identificador</th>
                       <th>Nome</th>
                   </tr>
               </thead>
               <tbody>
                    {clients.map(client=>{return(
                        <tr key={client.id}>
                            <td>{client.cpf_cnpj}</td>
                            <td>{client.nickname}</td>
                            <td>{client.name+" "+client.lastName}</td>
                            <td>
                                <Link to={'/client/'+client.id}>
                                    <VscGear size="30"/>
                                </Link>
                            </td>
                        </tr>
                    )})}
                </tbody>
           </table>
       </div>
    )
}