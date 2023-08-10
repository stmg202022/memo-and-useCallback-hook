import React from "react";

const Child3 = () => {
  console.log(
    "child three is not using memo so it re-render everytime parent re-render"
  );
  return <div>Child3</div>;
};

export default Child3;
