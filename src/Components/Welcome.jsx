import { render } from "@testing-library/react";
import { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

class WelcomeJumbotron extends Component {
  render() {
    return (
      <>
        <Jumbotron>
          <h1>{this.props.title}</h1>
          <p>{this.props.subtitle}</p>
        </Jumbotron>
      </>
    );
  }
}
// const WelcomeJumbotron = () => {
//   return (
//     <Jumbotron>
//       <h1>Book Store</h1>
//       <p>Welcome to Book Store</p>
//     </Jumbotron>
//   );
// };

export default WelcomeJumbotron;
