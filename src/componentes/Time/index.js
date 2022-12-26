import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <input
          value={props.corPrimaria}
          type="color"
          className="input-cor"
          onChange={(evento) => props.mudarCor(evento.target.value, props.nome)}
        />
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            return (
              <Colaborador
                key={colaborador.nome}
                corDeFundo={props.corPrimaria}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={props.aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
