import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Tabela from "./tabela/index";

function Button (props) {
  return(
    // comentario
    <a href={props.destino} className="btn btn-primary">
      {props.children} 
    </a>
  );
}

export default function App() {
  let estilo = {
    backgroundColor: 'red',
    color: 'white',
  };
  return (
    <div>
      <h1 className="text-center"> login</h1>
      <hr/>

      <form>
        <input className="form" placeholder="Email"/>
        <input className="form" placeholder="Senha"/>
        <button style={estilo}>Entrar</button>

        <Button destino="https://www.google.com">Teste</Button>
        <Button>Teste</Button>
      </form>

    <Tabela/>
    </div>
  );
}


