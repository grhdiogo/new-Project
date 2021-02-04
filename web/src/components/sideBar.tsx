import {Link} from 'react-router-dom'


export default function SideBar(){
   return(
        <div>
            <Link to="/">Cep</Link><br/>
            <Link to="/users">Clientes</Link>
        </div>
    )
}