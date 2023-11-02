import '../css/index.css';
import { ChatContext }  from '../context/ChatProvider';
import { useContext }  from 'react';


function NavBar() {

    const {usuario, loginUser, logOutUser} = useContext(ChatContext);
    console.log(usuario.estado);

    return ( 
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
           
                <a className="navbar-brand">Chat Firebase React</a>
               
                <div className="sesion-btn">
                    {
                        usuario.estado ?
                            <button className="btn btn-outline-danger" type="submit" onClick={logOutUser}>Cerrar Sesion</button>
                        :
                            <button className="btn btn-outline-success" type="button" onClick={loginUser}>Iniciar Sesion</button>
                    }
                </div>
               
            </div>
        </nav>
   )
}

export default NavBar;