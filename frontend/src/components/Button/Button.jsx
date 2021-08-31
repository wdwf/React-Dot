import React from 'react';

function Button(props) {

  // Destruturação: Usada para pegar do conjunto do props apenas o desejado
  // O onClick seria um callback jenerico para deixar assim o componente puro 
  const { name, onClick, className } = props;

  return (
    <>
    <button className={className} onClick={onClick}> { name } </button>
    </>
  )
}

export default Button;
/*
*/