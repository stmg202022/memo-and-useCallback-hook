import React, { Fragment, useReducer, useState } from "react";

const state = {
  count: 0,
  users: [],
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case "increment":
      //   let count = state.count + 1;
      //   return (state.count = count);

      return {
        ...state,
        count: state.count + action.payload,
      };

    case "formSubmit":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

const UseReducer = () => {
  const [data, dispatech] = useReducer(reducerFn, state);
  console.log(data);
  console.log(data.users);

  const [user, setUser] = useState({ myName: "", email: "" });

  let { myName, email } = user;

  //  const [myName, setmyName] = useState("");
  //  const [email, setEmail] = useState("");

  //  const handlemyNameChange = (e) => setmyName(e.target.value);
  //  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target; //destructuring

    // use the spread operator to update the object
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value, // Set the value directly, not in an array
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(myName, email);

    // const formData = new FormData();
    // formData.set("myName", myName);
    // formData.set("email", email);

    // console.log(formData.get("myName"));
    // console.log(formData.get("email"));
    // console.log(formData);

    // dispatech({ type: "formSubmit", payload: formData });

    // dispatech({ type: "formSubmit", payload: { myName, email } });

    dispatech({ type: "formSubmit", payload: user });

    setUser({ myName: "", email: "" });
  };

  return (
    <Fragment>
      <div>
        <h1>useReducer</h1>
        <button onClick={() => dispatech({ type: "increment", payload: 2 })}>
          {data.count}
        </button>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="myName"
              id=""
              value={myName}
              //   onChange={handlemyNameChange}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              id=""
              value={email}
              //   onChange={handleEmailChange}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UseReducer;
