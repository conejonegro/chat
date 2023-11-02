import React, { createContext, useState, useEffect } from "react";
import { auth, provider } from "../firebase/firebase";
// import { signInWithRedirect } from "firebase/auth";

//1- Creas el context, un contexto se usa para proveer de alguna variable global a tu aplicacion, por ejemplo el usuario porque el usuario se tiene que compartir en varios componentes
export const ChatContext = createContext();

// signInWithRedirect(auth, provider);

const ChatProvider = (props) => {

    const dataUsuario = {uid: "google,uid",email: "google.email",estado: false} 
    const [usuario, setUsuario] = useState({uid: null, email: null, estado: null}) // declaras el value del context puede ser un estado

    useEffect(() => {
        detectarUsuario()
    },[])

    const detectarUsuario = () => {
      

        auth.onAuthStateChanged(user => {

            if(user){
                setUsuario({uid: user.uid, email: user.email, estado: true})
            }
            else{
                setUsuario({uid: null, email: null, estado: false})
            }

        }

    )}

   const loginUser = async () => {

        try {
            await auth.signInWithPopup(provider)
        } catch (error) {
            console.log(error)
        }

    }

    const logOutUser = () => {
        console.log("loggin out")
        auth.signOut()
    }


    return ( 
        // 2- El context lo usas como componente mas .Provider y le pasas un value
        <ChatContext.Provider value={{usuario, loginUser, logOutUser}}>
            {props.children}
        </ChatContext.Provider>
     )
}

export default ChatProvider;

// Tienes que envolver los componentes que van usar el context  eso lo harias en tu componente index o donde renderices toda tu app