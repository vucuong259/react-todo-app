import React, {useContext} from "react";
import {ThemeContext} from '../contexts/ThemeContext';

const TodoItem = ({ todo, deleteTodo }) => {

    const {theme} = useContext(ThemeContext);
    const {isLightTheme, light, dark} = theme;
    const style = isLightTheme ? light : dark;

  return (
    <li onClick={deleteTodo.bind(this, todo.id)} style={style}>
      {todo.title}
    </li>
  );
};

export default TodoItem;
