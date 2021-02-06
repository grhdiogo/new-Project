import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import api from '../services/api'

interface Orders{
    id: number;
    deliverDay:string;
    deliverPeriod:string;
    paymentType:string;
    status:string;
    client:{
        id:string;
        name:string;
        lastName:string
};


}

export default function Orders(){
    const [orders, setOrders] = useState<Orders[]>([])

    useEffect(()=>{
        api.get('ordersList').then(res=>{
           setOrders(res.data)
        })
    })

    return(
        <div id="order">
            
            <h1>Pedidos</h1>
            <Link to="/cep/create">
                <FiPlus size={30}/>
            </Link>
            <table >
                <thead>
                    <tr>
                        <th>Entregar em</th>
                        <th>Período</th>
                        <th>Número do Pedido</th>
                        <th>Nome do Cliente</th>
                        <th>Condição do Pagamento</th>
                        <th>Situação</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order=>{return(
                        <tr key={order.id}>
                            <td>{order.deliverDay}</td>
                            <td>{order.deliverPeriod}</td>
                            <td>{order.id}</td>
                            <td>{order.client.name +" "+ order.client.lastName}</td>
                            <td>{order.paymentType}</td>
                            <td>{order.status}</td>
                        </tr>
                    )})}
                </tbody>

            </table>
            
        </div>
    )
}
