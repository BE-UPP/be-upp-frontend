import React from "react";

const Image = ({label}) => {
  return (
    <React.Fragment>
      <br />
      <img src={label} alt="" height="50%" width="50%" />
      <br />
    </React.Fragment>
  );
};

export default Image;
