import '../css/index.css';

function NavBar() {
    return ( 
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Chat Firebase React</a>
               
                <div className="sesion-btn">
                    <button className="btn btn-outline-success" type="button">Iniciar Sesion</button>
                    <button className="btn btn-outline-danger" type="submit">Cerrar Sesion</button>
                </div>
               
            </div>
        </nav>
   )
}

export default NavBar;