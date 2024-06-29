import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm(){

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const OnCancel = () => {
        setOpenModal(false);
    }

    const OnChange = (event) => {
        setNewTodoValue(event.target.value)
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva Tarea</label>
            <textarea placeholder="Escribe la Tarea" value={newTodoValue}
            onChange={OnChange}/>
            <div className="TodoForm-buttonContainer">
            <button type="" className="TodoForm-button TodoForm-button--cancel" onClick={OnCancel}>Cancelar</button>
            <button type="submit" className="TodoForm-button TodoForm-button--add">Agregar</button>
            </div>
        </form>
    )
}

export { TodoForm }