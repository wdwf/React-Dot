import React from 'react';

function CardExercise(props) {

  const { tool, title, level} = props;

  return(
    <div className="CardExercise">
      <div className="Line-left"><span className={`Line ${tool}`}></span></div>
      <div className="CardExercise__content">
        <span className="CardExercise__content-block CardExercise__content-tool">{tool}</span>
        <span className="CardExercise__content-block CardExercise__content-title">{title}</span>
        <span className="CardExercise__content-block CardExercise__content-level">{level}</span>
      </div>
    </div>
  );
}
export default CardExercise;