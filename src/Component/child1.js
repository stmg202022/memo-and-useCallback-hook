import React, { memo } from "react";

const Child = ({ name }) => {
  //
  console.log("child is rendering...", name);
  //
  return (
    <div>
      <div>this is child {name}</div>
    </div>
  );
};

export default memo(Child);
