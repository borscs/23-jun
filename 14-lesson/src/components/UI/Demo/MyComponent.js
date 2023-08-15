import React from 'react';

const MyComponent = (props) => {
  console.log('Demo My Component RUNNING');
  return <p>{props.children}</p>;
};

export default MyComponent;
