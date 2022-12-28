import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(props.corPrimaria, "0.6") }}
      >
        <input
          value={props.corPrimaria}
          type="color"
          className="input-cor"
          onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
        />
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={colaborador.id}
                id={colaborador.id}
                corDeFundo={props.corPrimaria}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={props.aoDeletar}
                aoFavoritar={props.aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
