import './css/index.css';
import { useContext } from 'react';
import { ChatContext } from './context/ChatProvider';
import NavBar from './components/NavBar';

function App () {

  const { saludo } = useContext(ChatContext);

  return (
    <div className="chat-cont">
      <NavBar/>
      <h1> {saludo}</h1>
    </div>
  );
}

export default App;