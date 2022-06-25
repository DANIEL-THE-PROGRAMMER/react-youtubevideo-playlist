import React, { useState, useEffect } from "react";

const FunctionalComponent = () => {
  const [formData, setFormData] = useState({
    name: "jsdbjdf",
    email: "kxxcjjidnfidjf",
  });

  const { name, email } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <h1>FunctionalComponent</h1>
      <input
        name="name"
        onChange={onChange}
        value={name}
        type="text"
        placeholder="Enter Name"
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        type="text"
        placeholder="Enter Email"
      />
    </div>
  );
};

export default FunctionalComponent;
