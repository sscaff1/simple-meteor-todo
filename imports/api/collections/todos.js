import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Todos = new Mongo.Collection('todos');
