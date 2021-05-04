import React, { useState, useContext } from "react";
import {ThemeContext} from '../contexts/ThemeContext';
import {v4 as uuidv4} from 'uuid'

const TodoForm = ({addTodo}) => {
  const [title, setTitle] = useState("");

  const {theme} = useContext(ThemeContext);
  const {isLightTheme, light, dark} = theme;
  const style = isLightTheme? light : dark;

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      addTodo({
          id: uuidv4(),
          title
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
