import React from 'react';
import './style.css';
import Person from './components/Person';

export default function App() {
  const order = {
    id: 1,
    amount: 100,
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Person name="Emmanuel" email="emmanuel@gmail.com" order={order} />
    </div>
  );
}
