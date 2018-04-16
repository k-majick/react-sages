import { Todo } from "./todo";
import * as React from 'react-dom';

interface Props {
  todos: Todo[];
}

export const TodoList = (props: Props) => {
  return <ul>
    {props.todos.map(todo =>
      <li> {todo.title} </li>
    )}
  </ul>
}
