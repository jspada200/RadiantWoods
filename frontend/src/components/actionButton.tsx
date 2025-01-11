import React from 'react';
import styled from 'styled-components';

const ActionButton = styled.button`
  background-color: #9aa05b; /* Greenish background */
  color: white; /* White text */
  font-size: 16px; /* Adjust text size */
  font-weight: bold; /* Ensure bold text */
  text-transform: uppercase; /* Uppercase letters */
  padding: 12px 24px; /* Padding around the text */
  border: none; /* Remove default border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow */

  &:hover {
    background-color: #aeb46b; /* Slightly lighter green on hover */
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
  }

  &:active {
    transform: scale(0.98); /* Slightly shrink on click */
  }
`;



export default ActionButton;