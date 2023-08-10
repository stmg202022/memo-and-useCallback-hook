import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);

  const incrementOne = () => setNumOne(numOne + 1);

  const incrementTwo = () => setNumTwo(numTwo + 1);

  // thse are the actual problem
  //first i test it on here for performance and it is taking a time for rendering and affecting both numOne and numTwo
  //   for (let i = 0; i < 2000000000; i++) {}

  //   const isEven = () => {
  //     for (let i = 0; i < 2000000000; i++) {} // it is taking a time again for rendering and affecting both numOne and numTwo
  //     return numOne % 2 === 0;
  //   };

  //Now the solutions is to use useMemo for it
  // if we use useMemo then it will take the time for specific state according to dependency present in its []
  const isEven = useMemo(() => {
    for (let i = 0; i < 2000000000; i++) {}
    return numOne % 2 === 0;
  }, [numOne]);

  //

  return (
    <div>
      {/* should use () for not using of useMemo */}
      {/* <h1>{isEven () ? "Even" : "Odd"}</h1> */}
      {/*  */}
      <h1>{isEven ? "Even" : "Odd"}</h1>
      <button onClick={incrementOne}>{numOne}</button>
      <button onClick={incrementTwo}>{numTwo}</button>
    </div>
  );
};

export default UseMemo;
