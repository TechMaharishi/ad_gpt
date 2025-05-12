import React from 'react'

export function Button(props) {
  const { value, handleClick } = props;
  const handleButtonClick = () => {
    handleClick(value);
  };
  return (
    <button onClick={handleButtonClick}>{value}</button>
  );
}