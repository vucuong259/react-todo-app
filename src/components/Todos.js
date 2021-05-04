import React, {useState, useContext} from 'react'
import {TodoContext} from '../contexts/TodoContext' 
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todos = () => {
    const todoTest = useContext(TodoContext);
    console.log(todoTest);

    const [todos, setTodos] = useState([
        {id: 1, title: 'Việc 1'},
        {id: 2, title: 'Việc 2'},
        {id: 3, title: 'Việc 3'}
    ])

    const addTodo = todo => {
        setTodos([...todos, todo])
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className="todo-list">
            <TodoForm addTodo={addTodo} />
            <ul>
                {
                    todos.map(todo => (
                        <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Todos
