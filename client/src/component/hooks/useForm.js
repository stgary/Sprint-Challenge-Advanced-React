import React, { useState } from 'react';

export const useForm = () => {
  const [values, setValues] = useState({});

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  console.log(values);

  return [values, handleChanges];
};