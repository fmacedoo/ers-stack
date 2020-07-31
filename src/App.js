import React, { useState } from 'react';

import sendAsync from './message-control/renderer';

import './App.css';

function App() {
    const [message, setMessage] = useState('');
    const [responses, setResponses] = useState([]);

    function send(data) {
        sendAsync(data).then((result) => setResponses([...responses, result]));
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Standalone application with Electron, React, and
                    SQLite stack.
                </h1>
            </header>
            <article>
                <p>
                    Say <i>ping</i> to the main process.
                </p>
                <input
                    type="text"
                    value={message}
                    onChange={({ target: { value } }) => setMessage(value)}
                />
                <button type="button" onClick={() => send(message)}>
                    Send
                </button>
                <br />
                <p>Main process responses:</p>
                <br />
                <pre>
                    {(responses && responses.join('\n')) ||
                        'the main process seems quiet!'}
                </pre>
            </article>
        </div>
    );
}

export default App;
