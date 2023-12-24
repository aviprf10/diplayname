import React, { useState } from 'react';

const FullNameForm = () => {
  // State to store first and last name
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // State to store the full name for display
  const [fullName, setFullName] = useState('');
  // State to track whether the form is valid for submission
  const [isFormValid, setIsFormValid] = useState(false);

  // Function to handle input changes
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    validateForm();
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    validateForm();
  };

  // Function to validate the form
  const validateForm = () => {
    setIsFormValid(firstName.trim() !== '' && lastName.trim() !== '');
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the form is valid before proceeding
    if (isFormValid) {
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
          <h2>Full Name:</h2>
          <p>{fullName}</p>
        </div>
      )}
    </div>
  );
};

export default FullNameForm;
