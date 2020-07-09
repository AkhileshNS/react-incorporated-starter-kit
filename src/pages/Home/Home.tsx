import React from 'react';
import { Store } from 'App/App.store';

interface IProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

const Home: React.FC<IProps> = (props) => {
  return (
    <div>
      <p>Learn React</p>
      <button onClick={props.increment}>increment</button>
      <br />
      <p>{props.counter}</p>
      <button onClick={props.decrement}>decrement</button>
    </div>
  );
};

export default () => {
  const store = Store.useContainer();

  return (
    <Home
      counter={store.counter}
      increment={store.increment}
      decrement={store.decrement}
    />
  );
};
