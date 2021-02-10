import {Link} from 'react-router-dom'


export default function SideBar(){
   return(
        <div>
            <Link to="/clients">Clientes</Link><br/>
            <Link to="/orders">Pedidos</Link><br/>
        </div>
    )
}