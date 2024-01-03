import React, { useState } from 'react';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName) {
      setSubmitted(true);
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" disabled={submitted}>
          Submit
        </button>
      </form>

      {submitted && (
        <div>
          <p>Full Name: {`${firstName} ${lastName}`}</p>
        </div>
      )}
    </div>
  );
};

export default NameForm;
