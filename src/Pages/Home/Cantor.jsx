import { useState } from "react";
import "./Musicas.css";
import nomeIcon from "../../UI/Icons/002-music-player.png";
import momentoIcon from "../../UI/Icons/001-clock.png";
import { useNavigate } from "react-router-dom";

function Cantor() {
  const navigate = useNavigate();
  const [nomeCantor, setNomeCantor] = useState();
  const [dataCulto, setDataCulto] = useState();

  const handleChangeCantor = (valor) => {
    setNomeCantor(valor);
  };
  const handleChangeData = (valor) => {
    setDataCulto(valor);
  };

  // texto enviado
  const handleSubmit = (event) => {
    navigate(`/Musicas/${nomeCantor}/${dataCulto}`);
  };

  return (
    <>
      <div className="container-fundo-cantor">
        <div className="title"> Lista de Musicas </div>

        <form className="info" onSubmit={(e) => handleSubmit(e)}>
          <hr className="linha-divisoria"></hr>

          {/* NOME */}
          <div className="info-nome">
            <div className="info-nome-title">Nome do Ministro:</div>
            <img
              className="info-nome-img"
              src={nomeIcon}
              alt="Icone nome da musica"
            ></img>
            <label className="info-label-nome">
              <input
                type="text"
                value={nomeCantor}
                onChange={(e) => handleChangeCantor(e.target.value)}
                placeholder="Insira o Nome do Ministro aqui"
              />
            </label>
            <hr></hr>
          </div>

          {/* MOMENTO */}
          <div className="info-momento">
            <div className="info-momento-title">Data do Culto:</div>
            <img
              className="info-momento-img"
              src={momentoIcon}
              alt="Ícone momento da musica"
            ></img>
            <label className="info-label-momento">
              <input
                type="text"
                value={dataCulto}
                onChange={(e) => handleChangeData(e.target.value)}
                placeholder="Insira a Data do Culto aqui"
              />
            </label>
            <hr></hr>
          </div>
        </form>

        <button
          className="proxima-pagina"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Prosseguir
        </button>
      </div>
    </>
  );
}

export default Cantor;
