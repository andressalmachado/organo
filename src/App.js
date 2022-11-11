import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
// O import abaixo está apontando apenas para a pasta CampoTexto,
//pois dentro dela, ele encontrará o arquivo index.js.
// Essa é uma forma para não repetir os nomes, como está no primeiro import.

import Formulario from "./componentes/Formulario";

function App() {
  const [colaboradores, setColaboradores] = useState("");
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
    </div>
  );
}

export default App;
