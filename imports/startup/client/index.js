import React from 'react';
import { render } from 'react-dom';
import TodoList from '/imports/ui/TodoList';
import AddTodo from '/imports/ui/AddTodo';

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

render(<App />, document.getElementById('app'))
