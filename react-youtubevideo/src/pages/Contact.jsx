import React from "react";

import Button from "../components/Button";
import State from "../components/State";

const Contact = ({ contact }) => {
  return (
    <div>
      Contact: {contact}
      <Button />
      <State />
    </div>
  );
};

export default Contact;
