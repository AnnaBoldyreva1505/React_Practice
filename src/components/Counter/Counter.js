import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;

import React, {Component} from 'react';

import './Counter.css';


class Counter extends React.Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  

  handleDecrement = () => {};

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">5</span>

        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;


































// import React, {Component} from 'react';
// import Controls from './Controls';
// import Value from './Value';
// import './Counter.css';

// class Counter extends React.Component {
//   state = {
//     value: 0,
//   };

//   handleIncrement = () => {
//     //нельзя обновлять состояние напрямую this.state.value = 6!!!!!!!!!!, оно обновляется так:
//     // this.setState({
//     //   value: 10,
//     // })
//     //таким образом обновляется состояние, когда нам нужно просто перезаписать данные. Для прибавления или убаления это не подходит. Этот синтаксис не учитывает предыдущее состояние
//     // Для обновления состояния на основе предыдущего мы передаем стрелочную функцию
//     this.setState(prevState => {
//       return {
//         value: prevState.value + 1,
//       };
//     });
//   };

  

//   handleDecrement = () => {};

//   // //Объявляем метод именно так, чтобы можно было посмотреть на this (привязать контекст и получить эеземпляр)
//   // handleIncrement = (event) =>{

//   //   setTimeout(() => {
//   //     console.log(event.target)
//   //   }, 1000);

//   //   console.log("Edtkbxbnm")
//   //   console.log(this)
//   //   console.log(event)
//   //   console.log(event.type)
//   //   console.log(event.target)
//   // }

//   render() {
//     return (
//       <div className="Counter">
//         <span className="Counter__value">0</span>

//         <div className="Counter__controls">
//           <button type="button" onClick={this.handleIncrement}>
//             Увеличить на 1
//           </button>
//           <button type="button" onClick={this.handleDecrement}>
//             Уменьшить на 1
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;

