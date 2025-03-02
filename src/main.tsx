import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './listUser/listUser.tsx';
import BodyChat from './bodyChat/bodyChat.tsx';
import WebSocket from 'socket.io';
import Head from './header/header.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <div className='main' style={{display: 'flex'}}>
    <Head/>
      <div className='chat-list'>
        <NavBar images='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOD0abk6GHTIRcOLItB1UnxDP8NtyACkMCA&s' name='виктор гречман' lastMesages='привет'/>   
      </div>

      <div className='body-chat'>
        <BodyChat image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOD0abk6GHTIRcOLItB1UnxDP8NtyACkMCA&s' name='виктор гречман' />
      </div>
    </div>
  </StrictMode>,
)