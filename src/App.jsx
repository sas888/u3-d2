import logo from "./logo.svg";
import "./App.css";

import CustomNavbar from "./Components/MyNav";
import WelcomeJumbotron from "./Components/Welcome";
import Footer from "./Components/MyFooter";
import LatestRelease from "./Components/LatestRelease";

function App() {
  return (
    <div className="App">
      <CustomNavbar title="Book Store" />
      <WelcomeJumbotron
        title="Epic Book Store"
        subtitle="Welcome to Epic Store"
      />
      <LatestRelease />
      <Footer />
    </div>
  );
}

export default App;
