import React, { createContext } from "react";
import CompA from "./CompA";
import CompC from "./CompC";

// we have FirstName and LastName in App.jsx and we want to use in comp C then we can directly pass this to compo c using context API

// STEP--1

const firstName = createContext();
const lastName = createContext();

const App = () => {
  return (
    <>
      <firstName.Provider value={"Navnesh"}>
        <lastName.Provider value={"Ranjan"}>
          <CompA />
        </lastName.Provider>
      </firstName.Provider>
    </>
  );
};

export default App;
export { firstName, lastName };
