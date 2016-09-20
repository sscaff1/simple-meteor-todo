import { Meteor } from 'meteor/meteor';
import { Todos } from './collections';
import { check } from 'meteor/check'

Meteor.methods({
  'todos.insert'(name) {
    check(name, String);
    Todos.insert({ name, completed: false });
  },
  'todos.toggle'(id, completed) {
    check(id, String);
    check(completed, Boolean);
    Todos.update(id, { $set: { completed }});
  },
  'todos.delete'(id) {
    check(id, String);
    Todos.remove(id);
  }
});
