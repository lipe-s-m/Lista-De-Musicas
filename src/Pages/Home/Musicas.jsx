import { useState } from "react";
import "./Musicas.css";
import nomeIcon from "../../UI/Icons/002-music-player.png";
import tomIcon from "../../UI/Icons/003-keyboard.png";
import momentoIcon from "../../UI/Icons/001-clock.png";
import { useParams } from "react-router-dom";

function Musicas() {
  const { nomeCantor } = useParams();
  const { dataCulto } = useParams();
  const dataFormatted = dataCulto.replace(/-/g, "/");

  const [musicas, setMusicas] = useState([
    { textoNome: "", textoTom: "", textoMomento: "" },
  ]);

  const adicionarMusica = () => {
    setMusicas([...musicas, { textoNome: "", textoTom: "", textoMomento: "" }]);
  };
  const excluirMusica = (index) => {
    const novosMusicas = [...musicas];
    const musicasFiltered = novosMusicas.filter((_, i) => i !== index);
    setMusicas(musicasFiltered);
  };
  //ao mudar valor do input
  const handleChange = (index, campo, valor) => {
    const novosMusicas = [...musicas];
    novosMusicas[index][campo] = valor;
    setMusicas(novosMusicas);
  };

  const obterDiaSemana = (data) => {
    console.log(data);
    const [dia, mes, ano] = data.split("/");
    const dataObj = new Date(`${ano}-${mes}-${dia}`);
    const diaSemana = [
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
      "Domingo",
    ];
    return diaSemana[dataObj.getDay()];
  };

  // texto enviado
  const handleSubmit = (event) => {
    const diaSemana = obterDiaSemana(dataFormatted);
    let textoResultado = `*Louvores ${diaSemana} - (${dataFormatted})* \n \n*[ ${nomeCantor} ]*\n`;
    event.preventDefault();
    for (let i = 0; i < musicas.length; i++) {
      const { textoNome, textoTom, textoMomento } = musicas[i];
      textoResultado += `\n* *${i + 1
        })* ${textoNome}  -  *(${textoTom})*  /  ${textoMomento}`;
    }

    alert(`Clique no OK para Copiar:\n\n${textoResultado}`);

    // Copia o texto para a área de transferência
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textoResultado;
    document.body.appendChild(tempTextArea);
    tempTextArea.select(); // Seleciona todo o texto no input
    document.execCommand("copy"); // Copia o texto selecionado para a área de transferência
    document.body.removeChild(tempTextArea); // Remove o elemento temporário do DOM
  };

  return (
    <>
      <div className="container-fundo">
        <div className="title"> Lista de Musicas </div>

        {musicas.map((conjunto, index) => (
          <form key={index} className="info" onSubmit={(e) => handleSubmit(e)}>
            <hr className="linha-divisoria"></hr>

            {/* NOME */}
            <div className="info-nome">
              <div className="info-nome-title">Nome da Música:</div>
              <img
                className="info-nome-img"
                src={nomeIcon}
                alt="Icone nome da musica"
              ></img>
              <label className="info-label-nome">
                <input
                  type="text"
                  value={conjunto.textoNome}
                  onChange={(e) =>
                    handleChange(index, "textoNome", e.target.value)
                  }
                  placeholder="Insira o Nome da Musica aqui"
                />
              </label>
              <hr></hr>
            </div>

            {/* TOM */}
            <div className="info-tom">
              <div className="info-tom-title">Tom da Música:</div>
              <img
                className="info-tom-img"
                src={tomIcon}
                alt="Icone tom da musica"
              ></img>
              <label className="info-label-tom">
                <input
                  type="text"
                  value={conjunto.textoTom}
                  onChange={(e) =>
                    handleChange(index, "textoTom", e.target.value)
                  }
                  placeholder="Insira o Tom da Musica aqui"
                />
              </label>
              <hr></hr>
            </div>

            {/* MOMENTO */}
            <div className="info-momento">
              <div className="info-momento-title">Momento da Música:</div>
              <img
                className="info-momento-img"
                src={momentoIcon}
                alt="Ícone momento da musica"
              ></img>
              <label className="info-label-momento">
                <input
                  type="text"
                  value={conjunto.textoMomento}
                  onChange={(e) =>
                    handleChange(index, "textoMomento", e.target.value)
                  }
                  placeholder="Insira o Momento da Musica aqui"
                />
              </label>
              <hr></hr>
            </div>

            <button
              className="excluir-musica"
              type="button"
              onClick={() => excluirMusica(index)}
            >
              Excluir
            </button>
          </form>
        ))}
        <button
          className="adicionar-musica"
          type="button"
          onClick={adicionarMusica}
        >
          Adicionar Musica
        </button>

        <button
          className="confirmar-envio"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Concluir
        </button>


      </div>
    </>
  );
}

export default Musicas;
