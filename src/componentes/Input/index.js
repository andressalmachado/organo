import "./Input.css";

const Input = ({
  type = "text",
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = true,
}) => {
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`input input-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
