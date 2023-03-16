import "./App.css";
import Card from "./components/Card";

function App() {
  const usuario = {
    nome: "Amarilis Pequeno",
    idade: 42,
    foto: "https://avatars.githubusercontent.com/u/86123419?v=4",
    linkedin: "https://www.linkedin.com/in/amarilis-pequeno-38431150/",
    github: "https://github.com/Amarilisp",
  };

  return (
    <div>
      <Card usuario={usuario} />
    </div>
  );
}

export default App;
