import Banner from "./componentes/Banner/Banner";
// O import abaixo está apontando apenas para a pasta CampoTexto,
//pois dentro dela, ele encontrará o arquivo index.js.
// Essa é uma forma para não repetir os nomes, como está no primeiro import.

import Formulario from "./componentes/Formulario";

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
    </div>
  );
}

export default App;
