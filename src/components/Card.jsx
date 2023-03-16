import "./card.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Card({ usuario }) {
  return (
    <div className="card">
      <img className="card-logo" src={usuario.foto} alt={usuario.nome} />
      <div className="card-dados">
        <h1>{usuario.nome}</h1>
        <h2>Idade: {usuario.idade} anos</h2>
        <div className="card-contatos">
          <a href={usuario.github} target="_blank">
            <AiFillGithub className="icone" />
          </a>

          <a href={usuario.linkedin} target="_blank">
            <AiFillLinkedin className="icone" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
