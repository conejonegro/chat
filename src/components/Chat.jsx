import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { ChatContext } from "../context/ChatProvider";
import Form from "./Form";

function Chat() {

    // const [mensaje, setMensaje] = useState('');
    const { usuario, mensajes  } = useContext(ChatContext);
    const chatElement = useRef(null)

    // const mensajes= [{
    //     hola: "hola",
    //     texto: "texto",
    //     uid: "VY1efXx2PaQIqhYlcmYCcdKuZzA3"
    // }]

    useEffect(() => {
        chatElement.current.scrollTop = chatElement.current.scrollHeight;
        console.log(chatElement)
    }, [mensajes])

    
 
    

    return ( 
        <div className="chat" ref={chatElement} style={{height: '75vh', overflowY: 'scroll'}}>

            {
                mensajes.map((item, index) => (
                    usuario.uid === item.uid ? (

                        <div className="d-flex justify-content-end p-2" key={index}>
                            <span className="badge text-bg-primary">{item.texto}</span>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-start p-2" key={index}>
                            <span className="badge text-bg-secondary">{item.texto}</span>
                        </div>
                    )
                ))
            }

            <Form />
            
        
        </div>
     );
}

export default Chat;