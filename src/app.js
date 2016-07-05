import React from 'react';
import { render } from 'react-dom';
import { TodoList } from './components';

const dummyTodos = [
  { id: 0, isDone: true,  text: 'a' },
  { id: 1, isDone: false, text: 'b' },
  { id: 2, isDone: true,  text: 'c' },
  { id: 3, isDone: true,  text: 'd' },
]

render(
  <TodoList todos={ dummyTodos } />,
  document.getElementById('app')
);
