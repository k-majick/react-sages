import { ITodo } from "./todo";
import * as React from 'react';

interface Props {
  todos: ITodo[]
  removeTodo: (id: ITodo['id']) => void
}

export const TodoList = (props: Props) => {
  return <ul className="list-group">
    {props.todos.map(todo =>
      <li className="list-group-item" key={todo.id}>
        {todo.title}
        <span className="close" onClick={
          e => props.removeTodo(todo.id)
        }>&times;</span>
      </li>
    )}
  </ul>
}
