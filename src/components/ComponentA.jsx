import React from 'react';

function ComponentA(props) {
  return(
    <div>
      <h2>Componente A</h2>
      {/* Usado para renderizar o componenteB */}
      <div>{props.children}</div>
    </div>
  )
}

export default ComponentA;