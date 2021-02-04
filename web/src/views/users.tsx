import React,{useEffect, useState} from 'react'
import api from '../services/api'

interface Clients{
    id:number;
    cpf_cnpj: number;
    nickname: string;
    name:string;
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
                            <td>{client.name}</td>
                        </tr>
                    )})}
                </tbody>
           </table>
       </div>
    )
}