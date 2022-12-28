import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      corPrimaria: "#57c278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      corPrimaria: "#82cffa",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      corPrimaria: "#a6d157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      corPrimaria: "#e06b69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      corPrimaria: "#db6ebf",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      corPrimaria: "#ffba05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      corPrimaria: "#ff8a29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger;
    setColaboradores([...colaboradores, colaborador]);
  };
  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.corPrimaria = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    debugger;
    setTimes([...times, { ...novoTime }]);
  }

  function resolverFavorito(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) console.log((colaborador.favorito = true));
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          mudarCor={mudarCorDoTime}
          id={time.id}
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
