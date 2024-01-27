// Chat.js

import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  // Your updated Firebase config goes here
};

firebase.initializeApp(firebaseConfig);

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const messagesRef = firebase.database().ref('messages');

    // Listen for new messages
    messagesRef.on('child_added', (snapshot) => {
      setMessages((prevMessages) => [...prevMessages, snapshot.val()]);
    });

    return () => {
      // Clean up the Firebase listener when the component unmounts
      messagesRef.off('child_added');
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const messagesRef = firebase.database().ref('messages');

      // Push the new message to the database
      messagesRef.push({
        text: newMessage,
        user: user.displayName,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      });

      setNewMessage('');
    }
  };

  return (
    <div>
      <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
