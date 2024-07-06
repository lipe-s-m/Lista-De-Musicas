import { useState } from "react";
import "./Musicas.css";
import nomeIcon from "../../UI/Icons/002-music-player.png";
import momentoIcon from "../../UI/Icons/001-clock.png";
import { useNavigate } from "react-router-dom";

function Cantor() {
  const navigate = useNavigate();
  const [nomeCantor, setNomeCantor] = useState("");
  const [dataCulto, setDataCulto] = useState("");
  const [dataFormatada, setDataFormatada] = useState("");

  const handleChangeCantor = (valor) => {
    setNomeCantor(valor);
  };
  const handleChangeData = (event) => {
    const partes = event.target.value.split("-");
    if (partes.length === 3) {
      const ano = partes[0];
      const mes = partes[1];
      const dia = partes[2];
      const dateFormatada = `${dia}/${mes}/${ano}`;
      setDataFormatada(dateFormatada);
    }
    setDataCulto(event.target.value);
  };

  // texto enviado
  const handleSubmit = (event) => {
    if (nomeCantor.length === 0 || dataCulto.length < 10) {
      alert("Você deve preencher todos os campos para poder prosseguir!");
    } else {
      const formattedDate = dataFormatada.replace(/\//g, "-");
      console.log(dataFormatada);
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
                type="date"
                value={dataCulto}
                onChange={(e) => handleChangeData(e)}
                placeholder="Insira a Data do Culto"
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
