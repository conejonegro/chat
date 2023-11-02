import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App.jsx';
import ChatProvider from './context/ChatProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    
      {/* // Envuelves los componentes que quieres que usen el contexto en tu componente provider */}
      <ChatProvider>
          <App />
      </ChatProvider>
   
  </React.StrictMode>

);

