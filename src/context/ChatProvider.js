import React, { createContext } from "react";

// Creas el context
export const ChatContext = createContext();

const ChatProvider = (props) => {

    const saludo = "Hola desde Context API";

    return ( 
        // El context lo usas como componente mas .Provider y le pasas un value
        <ChatContext.Provider value={{saludo}}>
            {props.children}
        </ChatContext.Provider>
     )
}

export default ChatProvider;