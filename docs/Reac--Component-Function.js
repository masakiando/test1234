/*
    FunctionComponent https://reactjs.org/docs/components-and-props.html
*/

/*-- FunctionComponent https://reactjs.org/docs/components-and-props.html --*/
import React, {PropTypes} from 'react';

const FunctionComponent = ({ccc}) => {
  return (
    <h1>Hello, {ccc.name}</h1>
  );
};

FunctionComponent.propTypes = {
  ccc: PropTypes.object
};

export default FunctionComponent;
