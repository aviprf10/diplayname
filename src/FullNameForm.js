import React, { useState } from 'react';

const FullNameForm = () => {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const [fullName, setFullName] = useState('');

  const handleFirstNameChange = (e) => {
    const input = e.target.value;
    if (/^[a-zA-Z0-9\s]*$/.test(input) || input === '') {
      setFirstName(input);
    }
  };

  const handleLastNameChange = (e) => {
    const input = e.target.value;
    if (/^[a-zA-Z0-9\s]*$/.test(input) || input === '') {
      setLastName(input);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if both first name and last name are non-empty
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      // Concatenate first and last name to form the full name
      const newFullName = `${firstName} ${lastName}`;
      // Set the full name in state
      setFullName(newFullName);
    }
  };

  return (
    <div>
      <h1>Full name display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            pattern="[0-9]*"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            pattern="[0-9]*"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </label>
        <br />
        <button type="submit">
          Submit
        </button>
      </form>

      {fullName && (
        <div>
          <p>Full Name: {fullName}</p>
       </div>
      )}
    </div>
  );
};

export default FullNameForm;
