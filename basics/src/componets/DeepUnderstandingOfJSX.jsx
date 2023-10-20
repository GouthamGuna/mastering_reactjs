import React, { useState } from "react";

export const DeepUnderstandingOfJSX = () => {
  return (
    <div>
      <ContentLoader />
      <br></br>
      <Counter />
      <br></br>
      <AgeChecker />
      <br></br>
      <Friendslist />
    </div>
  );
};

function ContentLoader() {
  const topic = "React";
  return (
    <div>
      <h2>{topic} is Awesome.</h2>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    return setCount(count + 1);
  }

  return (
    <div>
      <label htmlFor="funwork">onClick Event : </label>
      <button onClick={handleClick}>Click Me {count}</button>
    </div>
  );
}

function AgeChecker() {
  const [validVoter, setValidVoter] = useState("");

  function validate(e) {
    // console.log("value : ", e);
    setValidVoter(18 >= e ? " Not Eligible to vote." : " Eligible to vote.");
  }

  return (
    <div>
      <label htmlFor="AgeValidatater"> Enter your age here! </label>
      <input
        type="number"
        name="age"
        onChange={(e) => validate(e.target.value)}
      />

      {validVoter}
    </div>
  );
}

function Friendslist() {
  const myFriends = [
    "S.Manikandan",
    "Rajasekar",
    "Visithra",
    "Sreeja",
    "kavi",
    "Fahad",
    "Abadul",
    "Dinesh",
    "JayKumar",
    "Manoj",
    "Suraya",
  ];

  // Posiable to error ::: Each child in a list should have a unique "key" prop

  return myFriends.map((fl) => <h6 key={fl}>{fl}</h6>);
}
