import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    if (firstName && lastName) {
      const fullName = `${firstName} ${lastName}`;
      setFullName(fullName);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <button type="submit" disabled={!firstName || !lastName}>
          Submit
        </button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}
