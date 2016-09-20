import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
}

export default class AddTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: ''
    }
    this.onChangeText = this.onChangeText.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  onChangeText({ target }) {
    this.setState({ text: target.value })
  }

  addTodo(event) {
    event.preventDefault();
    const { text } = this.state;
    Meteor.call('todos.insert', text, (error) => {
      if (error) {
        throw new Error(error);
      }
      this.setState({ text: '' });
    })
  }

  render() {
    return (
      <form style={styles.row} onSubmit={this.addTodo}>
        <input onChange={this.onChangeText} placeholder="Add Todo" value={this.state.text} />
        <input type="submit" />
      </form>
    );
  }
}
