import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatProvider";

function Form() {

    const { usuario, agregarMensaje  } = useContext(ChatContext);
    const [mensaje, setMensaje ] = useState('');

    function agregar(e){
        e.preventDefault();

        if(!mensaje.trim()){
            console.log("viene vacio")
            return
        }

        agregarMensaje(mensaje, usuario.uid)
        setMensaje('')

    }

    function capturarInput(e){
        console.log(e.target.value)
        setMensaje(e.target.value) 

    }

    return ( 

        <form className="fixed-bottom input-group p-3 bg-dark" onSubmit={agregar}>
                <input type="text" className="form-control" value={mensaje} onChange={capturarInput} placeholder="Escribe un mensaje" />
                
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
                
            </form>

     );
}

export default Form;