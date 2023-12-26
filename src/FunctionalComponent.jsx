import React from "react";

// Functional Component
const FunctionalComponent = () => {
  const greeting = "Hello C07, Welcome to Functional Component!";
  return <Headline value={greeting} />;
};

const Headline = ({ value }) => {
  return (
    <React.Fragment>
      <h2>{value}</h2>
    </React.Fragment>
  );
};

export default FunctionalComponent;
