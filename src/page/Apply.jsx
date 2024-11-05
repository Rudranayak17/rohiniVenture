import React from 'react';
import Side from '../components/leftSide';
import Form from '../components/FormDetail';


const Apply = () => {
  return (

    <div className="flex flex-col md:flex-row p-6 space-x-4 gap-7">
      <Side />
      <Form />
    </div>

  );
};

export default Apply;