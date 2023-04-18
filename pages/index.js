import { useState } from 'react';
import axios from 'axios';

export default function Chat() {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post('/api/chat', { input: inputText });
    setResponseText(res.data.output);
    setInputText('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Inter, sans-serif', height: '100%',color:'black' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Chat Langchain</h1>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', height: 'calc(100% - 180px)', width: '100%', padding: '1rem', backgroundColor: '#22272c', borderRadius: '8px', overflowY: 'auto', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '80%', backgroundColor: '#fff', borderRadius: '8px', padding: '1rem', marginBottom: '0.5rem' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.5', margin: '0', padding: '0' }}>Hi there! How can I help you today?</p>
        </div>
        {responseText && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', maxWidth: '80%', backgroundColor: '#fff', borderRadius: '8px', padding: '1rem', marginBottom: '0.5rem' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.5', margin: '0', padding: '0' }}>{responseText}</p>
          </div>
        )}
      </div>
      <form style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '120px' }} onSubmit={handleSubmit}>
        <textarea
          style={{ width: 'calc(100% - 260px)', height: '80px', fontSize: '1.2rem', padding: '1rem', borderRadius: '8px', border: 'none', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)' }}
          onChange={handleInputChange}
          value={inputText}
          placeholder="Send a message..."
        />
        <button style={{ width: '200px', height: '50px', fontSize: '1.2rem', backgroundColor: '#0077cc', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)' }} type="submit">Send</button>
      </form>
    </div>
  );
}



