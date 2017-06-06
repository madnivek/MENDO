import React from 'react';

const InfoSection = ({title, headline, description}) => {
  let parsedDescription = description;
  if(parsedDescription) {
    parsedDescription = parsedDescription.slice(3,-5);
  }
  return(
    <div className="content-section">
      <h1>{title}</h1>
      <h4 className="headline">{headline}</h4>
      <p>{parsedDescription}</p>
    </div>
  );
};

export default InfoSection;
