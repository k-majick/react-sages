import { ITodo } from "./todo";
import * as React from 'react';

interface Props {
  todos: ITodo[];
}

export const TodoList = (props: Props) => {
  return <ul className="list-group">
    {props.todos.map(todo =>
      <li key={todo.id}>
        {todo.title}
      </li>
    )}
  </ul>
}
