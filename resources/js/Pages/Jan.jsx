import React, { useState } from 'react';
import "./jan.css"
const Jan = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'), // Token CSRF para Laravel
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                const result = await response.json();



                localStorage.setItem('authToken', result.token);
                console.log('Success:', result);
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
<h1 className='h'>iniciar sesion</h1>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className='divfomr'>
                <button type="submit">log</button>
                </div>
            </form>
        </>
    );
};

export default Jan;
