// import React from "react";
// import Footer from "./Footer";

// export class Header extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h2>Header</h2>
//         <Footer id={this.props.id} name={this.props.name} />
//       </React.Fragment>
//     );
//   }
// }

// export default Header;

import React from "react";
import Footer from "./Footer";

const Header = (props) => {
  return (
    <React.Fragment>
      <h2>Header</h2>
      <Footer name={props.name} id={props.id} />
    </React.Fragment>
  );
};

export default Header;
