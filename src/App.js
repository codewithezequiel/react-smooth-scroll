import "./App.css";
import Home from "./pages";
import { Routes, Route } from "react-router-dom";
import SigninPage from "./pages/signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contactus" element={<SigninPage />} exact />
      </Routes>
    </div>
  );
}

export default App;
