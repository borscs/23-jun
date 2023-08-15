import React from 'react';
import MyComponent from "./MyComponent";

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <MyComponent>{props.show ? 'This is new!' : ''}</MyComponent>;
};

export default React.memo(DemoOutput);
