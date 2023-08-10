import React from "react";

const Child2 = ({ deleteHandle, isDeleted, name }) => {
  console.log("child2 called", isDeleted);
  return (
    <div>
      <div>
        {isDeleted ? <div>Deleted SuccessFully.</div> : <div>Not deleted.</div>}
      </div>
      <div>
        <button onClick={deleteHandle}>Delete</button>
      </div>
      <div>Child Name:{name}</div>
    </div>
  );
};

export default React.memo(Child2);
