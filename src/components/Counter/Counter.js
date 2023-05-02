import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {
//     //
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <div className="Counter">
//         <Value value={value} />

//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

// export default Counter;





class Counter extends Component {
//если не передать начльное значение в app, то будет подставлено дефолтное из статик
static defaultProps = {
  initialValue: 0,
}

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      const newValue = prevState.value - 1;
      return {
        value: newValue < 0 ? 0 : newValue,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        {/* <span className="Counter__value">{this.state.value}</span> */}

        <Value value={this.state.value}/>

        <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>

        {/* <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
