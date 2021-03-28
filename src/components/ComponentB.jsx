import React from 'react';

function ComponentB(props) {
  return(
    <div>
      <h2>Componente B</h2>
      {/* Usado para renderizar o Botão */}
      <div>{props.children}</div>
    </div>
  )
}

export default ComponentB;