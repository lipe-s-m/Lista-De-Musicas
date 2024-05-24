import { useState } from "react";
import "./Home.css";
import nomeIcon from "../../UI/Icons/002-music-player.png";
import tomIcon from "../../UI/Icons/003-keyboard.png";
import momentoIcon from "../../UI/Icons/001-clock.png";

function Home() {
  const [conjuntos, setConjuntos] = useState([
    { textoNome: "", textoTom: "", textoMomento: "" },
  ]);

  const adicionarConjunto = () => {
    setConjuntos([
      ...conjuntos,
      { textoNome: "", textoTom: "", textoMomento: "" },
    ]);
  };

  const handleChange = (index, campo, valor) => {
    const novosConjuntos = [...conjuntos];
    novosConjuntos[index][campo] = valor;
    setConjuntos(novosConjuntos);
  };

  // texto enviado
  const handleSubmit = ( event) => {
    
    let textoResultado = "";
    event.preventDefault();
    for(let i = 0; i < conjuntos.length; i++){
      const { textoNome, textoTom, textoMomento } = conjuntos[i];
      textoResultado += `\n* ${textoNome}  -  *(${textoTom})* / ${textoMomento}`;
    }
   
    alert(`Texto digitado:\n${textoResultado}`);

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

        {conjuntos.map((conjunto, index) => (
          <form
            key={index}
            className="info"
            onSubmit={(e) => handleSubmit(index, e)}
          >
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
            
          </form>
        ))}
        <button className="confirmar" type="submit" onClick={(e) => handleSubmit( e)}>
          Enviar
        </button>
        <button onClick={adicionarConjunto}>Adicionar Musica</button>
        
      </div>
    </>
  );
}

export default Home;
