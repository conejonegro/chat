import './css/index.css';
import { useContext } from 'react';
import { ChatContext } from './context/ChatProvider';
import NavBar from './components/NavBar';
import Chat from './components/Chat';

function App () {

 const { usuario } = useContext(ChatContext); // el context que create con createContext es el que pasas a useContext
  console.log(usuario)
  return (
    <div className="chat-cont">
      <NavBar/>
      { usuario.estado === true ? 
        <Chat/>
      : 
        <div className="text-center fw-light my-4 display-6">inicia sesion para usar el chat</div>
      }
    </div>
  )
}

export default App;