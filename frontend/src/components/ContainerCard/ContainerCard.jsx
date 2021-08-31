import React from 'react';
import CardExercise from '../CardExercise/CardExercise';

function ContainerCard() {
  return(
    <div className="ContainerCard">
      <div className="ContainerCard__header">
        <h2 className="ContainerCard__title">Notas de codigos</h2>
      </div>
      <div className="ContainerCard__wrapper">
        <CardExercise tool="React" title="Props" level="Beginner" />
        <CardExercise tool="React" title="Hooks" level="Beginner" />
        <CardExercise tool="Js" title="Componentes" level="Beginner" />
        <CardExercise tool="React" title="Webpack" level="Beginner" />
        <CardExercise tool="React" title="ESLint" level="Beginner" />
        <CardExercise tool="React" title="Operador Condicional" level="Beginner" />
        <CardExercise tool="React" title="Props" level="Beginner" />
        <CardExercise tool="React" title="Props" level="Beginner" />
        <CardExercise tool="React" title="Props" level="Beginner" />
      </div>
    </div>
  );
}

export default ContainerCard;