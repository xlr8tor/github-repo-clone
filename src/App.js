import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./features/login/Login";
import Home from "./features/home/Home";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
