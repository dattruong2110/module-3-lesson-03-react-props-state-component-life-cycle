import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./conditional-rendering/Login";
// import MyComponent from "./life-cycle-method/MyComponent";
// import MyStateComponent from "./state/MyStateComponent";
// import FunctionalComponent from "./FunctionalComponent";
// import ClassComponent from "./ClassComponent";
// import MyPropsComponent from "./props/MyPropsComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    {/* <FunctionalComponent /> */}
    {/* <ClassComponent /> */}
    {/* <MyPropsComponent /> */}
    {/* <MyStateComponent /> */}
    {/* <MyComponent /> */}
    <Login />
  </React.Fragment>
);
