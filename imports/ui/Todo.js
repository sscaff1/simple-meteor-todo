import React, { PropTypes, Component } from 'react';
import { Meteor } from 'meteor/meteor';

const styles = {
  delete: {
    color: 'red',
    marginLeft: 5,
    cursor: 'pointer',
  },
  todoText: {
    textDecoration: 'line-through',
    cursor: 'pointer',
  }
}

export function Todo({ completed, name, id }) {
  const deleteTodo = () => {
    const shouldDelete = confirm('Are you sure you want to delete?');
    if (shouldDelete) {
      Meteor.call('todos.delete', id, error => {
        if (error) {
          throw new Error(error);
        }
      });
    }
  };

  const toggleComplete = () => {
    Meteor.call('todos.toggle', id, !completed, error => {
      if (error) {
        throw new Error(error);
      }
    });
  };
  const textStyle = completed ? styles.todoText : { cursor: 'pointer' };
  return (
    <li>
      <span style={textStyle} onClick={toggleComplete}>
        {name}
      </span>
      <span style={styles.delete} onClick={deleteTodo}>x</span>
    </li>
  );
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
