import React from 'react';
import CardExercise from './CardExercise';

function ContainerCard() {
  return(
    <div className="ContainerCard">
      <CardExercise tool="React" title="Props" level="Beginner" />
      <CardExercise tool="React" title="Hooks" level="Beginner" />
      <CardExercise tool="React" title="Componentes" level="Beginner" />
      <CardExercise tool="React" title="Webpack" level="Beginner" />
      <CardExercise tool="React" title="ESLint" level="Beginner" />
      <CardExercise tool="React" title="Operador Condicional sadsadsadsadfsadfsgdh" level="Beginner" />
      <CardExercise tool="React" title="Props" level="Beginner" />
      <CardExercise tool="React" title="Props" level="Beginner" />
      <CardExercise tool="React" title="Props" level="Beginner" />
    </div>
  );
}

export default ContainerCard;