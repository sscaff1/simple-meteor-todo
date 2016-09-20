import { Meteor } from 'meteor/meteor';
import { Todos } from './collections';

Meteor.publish('todos', function publishTodos() {
  return Todos.find();
});
