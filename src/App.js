import logo from "./logo.svg";
import "./App.css";

import ModalRegister from "./ModalRegister";

import ModalLogin from "./ModalLogin";

function App() {
  return (
    <div className="App">
      {/* <ModalRegister/> */}
      <ModalLogin />
    </div>
  );
}

export default App;
