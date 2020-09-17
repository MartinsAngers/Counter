import React, { Component } from "react";
import { render } from "react-dom";

import "./styles.css";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;

    return (
      <main className="Counter">
        <p>Counter</p>
        <p className="count">{count}</p>
        <section className="controls">
          <button class="Increment" onClick={this.increment}>
            Increment
          </button>
          <button class="Reset" onClick={this.reset}>
            Reset
          </button>
          <button class="Decrement" onClick={this.decrement}>
            Decrement
          </button>
        </section>
      </main>
    );
  }
}

render(<Counter />, document.getElementById("root"));
