import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, selectMessages } from '../../features/chatSlice';
import style from '../../components/chat/chat.module.css'
import logoChat from '../../image/831315.png';

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false); 
  
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      dispatch(addMessage({ text: newMessage, sender: 'Пользователь' }));

      const botResponse = getBotResponse(newMessage.trim().toLowerCase());
      if (botResponse) {
        dispatch(addMessage({ text: botResponse, sender: 'Помощник' }));
      }

      setNewMessage('');
    }
  };
  const handleLogoClick = () => {
    setIsChatOpen(!isChatOpen); 
  };

  const getBotResponse = (userMessage) => {
    if (userMessage === 'привет') {
      return 'Здравствуйте!';
    } else if (userMessage === 'дайте контакты') {
      return 'Хорошо. Наш телеграм - 8(928) 877 30 06';
    } else if (userMessage.includes('цена на cadillac')) {
      return 'На данную модель цена 24ч составляет 940$';
    }
    return 'Извините, не могу понять ваш запрос.';
  };

  return (
    <div className={style.wrapper}>
      {isChatOpen && (
        <div className={style.wrapperText} style={{position: 'fixed', top: '330px',left:'80%' , width: '254px'}}>
          <div style={{ height: '300px', border: '1px solid #ccc', overflowY: 'scroll' , background:'gray' }}>
            {messages.map((message, index) => (
              <div key={index} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                {message.sender}: {message.text}
              </div>
            ))}
          </div>
          <div className={style.buttonAdd} style={{ marginTop: '10px' }}>
            <input className={style.input}
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder='Напишите сообщение'
 />
            <button className={style.btn} onClick={handleSendMessage}>Отправить</button>
          </div>
        </div>
      )}
          <img src={logoChat} alt="" onClick={handleLogoClick} className={style.logo}/>
    </div>
  );
};


export default Chat;
