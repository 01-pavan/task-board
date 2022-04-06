import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/dashboard";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
