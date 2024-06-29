import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter() {

  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)


    return (

    

      <div>

      <h1 className='title'>Lista De Tareas</h1>

      {completedTodos === totalTodos ? (
        <h1 className='TodoCounter glow'>
          Has Completado Todas las tareas  !!!
        </h1>
      ) : (
        <h1 className='TodoCounter'>
          Has completado <span> {completedTodos} </span> de <span> {totalTodos} </span> Tareas
        </h1>
      )}
      
    
    </div>

    );
  }

  export { TodoCounter };