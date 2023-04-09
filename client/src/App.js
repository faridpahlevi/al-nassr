import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Content from "./components/Content";
import About from "./components/About";
import Footer from "./components/Footer";
import Doc from "./components/Doc";

function App() {
  return (
    <div>
      <Nav />
      <Home id={"home"} />
      <Content id={"content"} />
      <About id={"about"} />
      <Doc id={"documentation"} />
      <Footer />
    </div>
  );
}

export default App;
