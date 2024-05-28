import { BrowserRouter, Route, Routes } from "react-router-dom";
import Musicas from "../Pages/Home/Musicas";
import Concluido from "../Pages/Concluido";
import Cantor from "../Pages/Home/Cantor";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cantor />}></Route>
        <Route path="/Musicas/:nomeCantor/:dataCulto" element={<Musicas />}></Route>
        <Route path="/Concluido" element={<Concluido />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
