import React from 'react';

const SingleProject = ({ params }) => {
  const { segments } = params;

  return (
    <div>
      {
        segments.map((p,index )=> <h1 key={index}> {p} </h1>)
      }
      {/* <h1>page number : {page} and products quantity {count}</h1> */}
    </div>
  );
};

export default SingleProject;