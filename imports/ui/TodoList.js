import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Todos } from '/imports/api/collections'
import { Todo } from './Todo';

function TodoList({ todos, loading }) {
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <ul>
      {todos.map((todo, i) => (
        <Todo key={i} name={todo.name} completed={todo.completed} id={todo._id} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
  loading: PropTypes.bool.isRequired,
}

export default createContainer(() => {
  const todosHandle = Meteor.subscribe('todos');
  return {
    loading: !todosHandle.ready(),
    todos: Todos.find().fetch(),
  };
}, TodoList)
