import React from 'react';

const AdditionalFeature = props => {

  const addFeatureFunction = () => {
    return (
      props.addNewFeature(props.feature)
    );
  }

  return (
    <li>
      <button className="button" onClick={addFeatureFunction}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;