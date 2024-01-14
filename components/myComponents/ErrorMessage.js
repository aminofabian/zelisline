// ErrorMessage.js

import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className= "error-message" >
    <p>An error occurred: </p>
      <p> { message } </p>
      </div>
  );
};

export default ErrorMessage;
