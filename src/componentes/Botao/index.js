import "./Botao.css";

const Botao = (props) => {
  //o children recebe o que está dentro da tag botão, ou seja, tudo
  //que tem dentro da tag é children
  return <button className="botao">{props.children}</button>;
};

export default Botao;
