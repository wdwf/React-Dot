import React from 'react';
import CardExercise from './CardExercise';

function ContainerCard() {
  return(
    <div className="ContainerCard">
      <CardExercise tool="REACT" title="Props" level="Beginner" />
      <CardExercise tool="REACT" title="Hooks" level="Beginner" />
      <CardExercise tool="REACT" title="Componentes" level="Beginner" />
      <CardExercise tool="REACT" title="Webpack" level="Beginner" />
      <CardExercise tool="REACT" title="ESLint" level="Beginner" />
      <CardExercise tool="REACT" title="Operador Condicional" level="Beginner" />
      <CardExercise tool="REACT" title="Props" level="Beginner" />
      <CardExercise tool="REACT" title="Props" level="Beginner" />
      <CardExercise tool="REACT" title="Props" level="Beginner" />
    </div>
  );
}

export default ContainerCard;