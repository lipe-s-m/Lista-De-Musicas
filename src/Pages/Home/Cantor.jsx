import { useState } from "react";
import "./Musicas.css";
import nomeIcon from "../../UI/Icons/002-music-player.png";
import momentoIcon from "../../UI/Icons/001-clock.png";
import { useNavigate } from "react-router-dom";

function Cantor() {
  const navigate = useNavigate();
  const [nomeCantor, setNomeCantor] = useState("");
  const [dataCulto, setDataCulto] = useState("");

  const handleChangeCantor = (valor) => {
    setNomeCantor(valor);
  };
  const handleChangeData = (value) => {
    value = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos

    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + "/" + value.slice(5, 9);
    }
    if (value.length > 10) {
      value = value.slice(0, 10); // Limita a entrada a 10 caracteres
    }

    setDataCulto(value);
  };

  // texto enviado
  const handleSubmit = (event) => {

    if(nomeCantor.length === 0 || dataCulto.length < 10){
      alert("preenche os bgl mano");
    }
    else{
      const formattedDate = dataCulto.replace(/\//g, "-");
      navigate(`/Musicas/${nomeCantor}/${formattedDate}`);
    }
   
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
              alt="Icone nome do cantor"
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
              alt="Ícone data do culto"
            ></img>
            <label className="info-label-data">
              <input
                type="text"
                value={dataCulto}
                onChange={(e) => handleChangeData(e.target.value)}
                placeholder="Insira a Data do Culto aqui (dd/mm/aaaa)"
                maxLength="10"
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
