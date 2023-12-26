// import React from "react";

// export class Footer extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h2>Footer</h2>
//         <p>{this.props.name}</p>
//         <p>{this.props.id}</p>
//       </React.Fragment>
//     );
//   }
// }

// export default Footer;

import React from "react";

const Footer = (props) => {
  return (
    <React.Fragment>
      <h2>Footer</h2>
      <p>{props.name}</p>
      <p>{props.id}</p>
    </React.Fragment>
  );
};

export default Footer;
