import React, { useState, useContext } from "react";
import {ThemeContext} from '../contexts/ThemeContext';
import {TodoContext} from '../contexts/TodoContext';
import {v4 as uuidv4} from 'uuid'
import { ADD_TODO } from "../reducers/types";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const {theme} = useContext(ThemeContext);
  const {isLightTheme, light, dark} = theme;

  const {dispatch} = useContext(TodoContext);

  const style = isLightTheme? light : dark;

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({
          type: ADD_TODO,
          payload: {
            todo: {
              id: uuidv4(),
              title
            }
          } 
      })
      setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter a new todo..."
        onChange={onTitleChange}
        value={title}
        required
      />
      <input type="submit" value="Add" style={style} />
    </form>
  );
};

export default TodoForm;
