import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequestDesigner from "./pages/RequestDesigner";
import Database from "./pages/Database";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"                 element={<Home />} />
        <Route path="/database"         element={<Database />} />
        <Route path="/request-designer" element={<RequestDesigner />} />
        <Route path="/login"            element={<Login />} />
        <Route path="/register"         element={<Register />} />
        <Route path="/upload"           element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}