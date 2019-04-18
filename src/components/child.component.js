import React from 'react';

export default function childComponent(props) {
  const { counter } = props;
  return (
    <React.Fragment>
      <h1>CHILD</h1>
      <h1>{counter*1000}</h1>
    </React.Fragment>
  )
}
