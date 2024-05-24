import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Concluido from "../Pages/Concluido";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Concluido" element={<Concluido />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
