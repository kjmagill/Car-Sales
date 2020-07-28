import React from 'react';

const AddedFeature = props => {

  const removeFeatureFunction = () => {
    props.removeFeature(props.feature);
  }

  return (
    <li>
      <button className="button" onClick={removeFeatureFunction}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
