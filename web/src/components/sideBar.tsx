import {Link} from 'react-router-dom'


export default function SideBar(){
   return(
        <div>
            <Link to="/orders">Cep</Link><br/>
            <Link to="/clients">Clientes</Link>
        </div>
    )
}