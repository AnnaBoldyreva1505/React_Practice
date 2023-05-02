import { Layout } from './Layout';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList/TodoList';
import React, { Component } from 'react';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// export const App = () => {
//   return (
//     <Layout>
//         {/* <Counter initialValue={10}/> */}
//         {/* <Dropdown/> */}
//         {/* <ColorPicker options={colorPickerOptions}/> */}
//         <TodoList/>
//     </Layout>
//   );
// };

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'todo 1', done: false },
      { id: 'id-2', text: 'todo 2', done: true },
    ],
  };

  //здесь используем только фильтры редьюся мапы, чтобы не мутировать коллецию (неизменть исходный массив данных)
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;

    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.done ? total + 1 : total),
      0,
    );
    // const completedTodoCount = todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0,
    // );
    return (
      <>
        <h1>Состояние компонента</h1>
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
