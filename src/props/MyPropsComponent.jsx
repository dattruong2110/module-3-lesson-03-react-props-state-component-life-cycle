// import React from "react";
// import Header from "./Header";

// export class MyComponent extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Hello</h1>
//         <Header name="Dat" id="10" />
//       </React.Fragment>
//     )
//   }
// }

// export default MyComponent;

import React from "react";
import Header from "./Header";

const MyPropsComponent = () => {
  return (
    <React.Fragment>
      <h1>My Component</h1>
      <Header name={"Dat"} id={10} />
    </React.Fragment>
  );
};

export default MyPropsComponent;
