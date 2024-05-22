import React, { useState } from 'react';
import './App.css';

import { PingRequest } from './proto/ping_pb.js';
import { PingServiceClient } from './proto/ping_grpc_web_pb';

const client = new PingServiceClient('http://0.0.0.0:8000', null, null);

async function ping(message) {
  console.log(message)
  const request = new PingRequest();
  request.setMessage(message);

  return new Promise((resolve, reject) => {
    client.ping(request, {}, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.getMessage());
      }
    });
  });
}

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const res = await ping(input);
      setResponse(res);
    } catch (error) {
      setResponse(`Error: ${error}`);
    }
  };

  return (
    <div className="App">
      <h1>gRPC Ping Client</h1>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Send</button>
      <div>
        <h2>Response</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
