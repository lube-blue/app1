import React from 'react';

export class Calculator2 extends React.Component {
  n1 = 20;
  n2 = 4;
  calculate = (op) => {
    const expression = `${this.n1} ${op} ${this.n2}`;
    const result = eval(expression);
    alert(`${expression} = ${result}`);
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <span>{this.n1}</span>&nbsp;
        
        {}
        <button onClick={() => this.calculate('+')}>+</button>&nbsp;
        <button onClick={() => this.calculate('-')}>-</button>&nbsp;
        
        {}
        <button onClick={this.calculate.bind(this, '*')}>*</button>&nbsp;
        <button onClick={this.calculate.bind(this, '/')}>/</button>&nbsp;
        
        <span>{this.n2}</span>
      </div>
    );
  }
}

export default Calculator2;