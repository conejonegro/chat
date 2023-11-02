function Chat() {
    return ( 
        <div className="chat">
            <div className="d-flex justify-content-start p-2">
                <span className="badge text-bg-primary">Mensaje Entrando</span>
            </div>
            <div className="d-flex justify-content-end p-2">
                <span className="badge text-bg-secondary">Mensaje de salida</span>
            </div>

            <form className="fixed-bottom input-group p-3 bg-dark">
                <input type="text" className="form-control" placeholder="Escribe un mensaje" />
                
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
                
            </form>
        </div>
     );
}

export default Chat;