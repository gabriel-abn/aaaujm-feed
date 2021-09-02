import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <GlobalStyle />
    </div>
  );
};

export default App;
