import React from 'react';
import './TodosLoading.css'

function TodosLoading() {
return (
    <div className="LoadingContainer">
        <span className='Loading-CompleteIcon'></span>
        <p className='Loading-text'></p>
        <span className='Loading-DeleteIcon'></span>
    </div> 


    );
  }

  export { TodosLoading };