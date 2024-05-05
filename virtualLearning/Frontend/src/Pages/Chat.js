import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from "./BaseUrl";
import { firebase } from './Firebase';
import 'firebase/auth';
import 'firebase/firestore';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const navigate = useNavigate();
  const dummy = useRef();
  const [user, setUser] = useState({ uid: '', photoURL: '', name: '' });
  const name = localStorage.getItem("username");
  const firestoreMessagesRef = firebase.firestore().collection('messages');

  const getUserData = async () => {
    try {
      const user = firebase.auth().currentUser;
      if (user) {
        const userId = user.uid;
        const userpic = user.photoURL;

        // Fetch the user's name from your API or wherever it's stored
        const response = await axios.get(`${baseUrl}/getUserData/${userId}`);
        const userName = response.data.name;

        setUser({ uid: userId, photoURL: userpic, name: userName });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = firestoreMessagesRef.orderBy('createdAt').limit(25).onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setMessages(data);
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    });

    getUserData();

    return () => {
      unsubscribe();
    };
  }, [firestoreMessagesRef]);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      firestoreMessagesRef.add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid: user.uid,
        photoURL: user.photoURL,
        user: user.name || name || 'Anonymous', // Include the user's name in the message or use 'Anonymous'
      });
  
      setNewMessage('');
    }
  };

  return (
    <div>
      <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.user || name || 'Anonymous'}:</strong> {message.text}
          </div>
        ))}
        <span ref={dummy}></span>
      </div>

      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
      <br />
      <button onClick={() => navigate('/Addcts')}>Go to Addcts Page</button>
    </div>
  );
};

export default Chat;
