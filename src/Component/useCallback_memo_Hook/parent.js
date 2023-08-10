import React, { useState, memo, useCallback } from "react";
import Child1 from "./child1";
import Child2 from "./child2";
import Child3 from "./child3";

// after the state of the count changes, render the parent component not to the child1 and child2.
//So we use the memo for child1 and useCallback for the child2.
// for child2: rr-render the child2 only when the state of the  isDeleted changes.for that use the useCallback hook

const Parent = () => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Samson");

  console.log(" parent rendered.");

  const [isDeleted, setIsDeleted] = useState(false);

  //this is the example of problem
  // const deleteHandle = () => {
  //   setIsDeleted(!isDeleted);
  // };

  //it is just assigning and sending to the child1
  const handleNameChange = () => {
    setName("Sagar");
  };

  const deleteHandle = useCallback(() => {
    // setIsDeleted((prevIsDeleted) => !prevIsDeleted);

    setIsDeleted(!isDeleted);

    setName("Sagar");
  }, [isDeleted]);

  // const deleteHandle = useCallback(() => {
  //   console.log(
  //     "parent component is re-rendered but not child2 bcz there is no dependency in this useCallback"
  //   );
  // }, []);

  // const deleteHandle = useCallback(() => {
  //   console.log(
  //     "parent component is re-rendered but not child2 bcz there is no dependency in this useCallback",
  //     count
  //   );
  // }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      {/* this child1 is not re-render as parent have not send any props and child1 have used memo */}
      <Child1 />

      {/* in this case  parent have send the name props but not  changes in name. so it do not re-render the child */}
      {/* <Child1 name={name} /> */}

      {/* in this case parent have send the name props and handleNamechange function. child will be re-render bcz of passing of just handleNamechange   */}
      {/* but we have not changed the name by assigning onChange event handler */}
      {/* it means that when the parent re-render, all the functions present inside the parent componet re-assign.
       so that it parent re-render all the componet related to that function */}

      {/* <Child1 handleNameChange={handleNameChange} name={name} /> */}

      {/*  */}
      {isDeleted ? <div>{name}</div> : <div>No name</div>}

      {/* to protect from this re-assigning of function at re-rendering of parent, we use useCallback */}
      {/* this child2 is re-renderd when the isDeleted state changes not on changing count state */}
      {/* <Child2 deleteHandle={deleteHandle} isDeleted={isDeleted} /> */}
      <Child2 deleteHandle={deleteHandle} isDeleted={isDeleted} name={name} />

      {/* so the below code will re-render the child2 component, bcz of handleNameChange */}
      {/* <Child2
        deleteHandle={deleteHandle}
        isDeleted={isDeleted}
        name={name}
        handleNameChange={handleNameChange}
      /> */}

      {/* child three is not using memo so it re-render everytime parent re-render */}
      <Child3 />
    </div>
  );
};

export default memo(Parent);
