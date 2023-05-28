import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
