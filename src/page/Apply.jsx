import React from 'react';
import Side from '../components/leftSide';
import Form from '../components/FormDetail';

const Apply = () => {
  return (
    <div className="flex justify-center items-center p-6 gap-7 min-h-screen">
      <div className="w-full sm:w-3/5"> {/* Full width on mobile, 60% on larger screens */}
        <Form />
      </div>
    </div>
  );
};

export default Apply;
