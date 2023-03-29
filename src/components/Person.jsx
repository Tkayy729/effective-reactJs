import React from 'react';

const Person = ({ name, email, order }) => {
  // order.id= 5
  // DO not mutate props attributes in children components
  return (
    <>
      <div>
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
      </div>
      <div>
        <p>{order.id}</p>
        <p>{order.amount}</p>
      </div>
    </>
  );
};

export default Person;
