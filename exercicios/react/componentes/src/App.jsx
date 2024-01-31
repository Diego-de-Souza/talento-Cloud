import InputComLabel from "./InputComLabel"
import Botao from "./Botao"
import './App.css'

function App() {
  const estiloBotao = {
    color: 'blue',
    backgroundColor: 'pink'
  }
  return <>
    <h1>Componentes</h1>
    <InputComLabel idString='nome' textoLabel='Nome: '/>
    <InputComLabel idString='Idade' textoLabel='Idade'/>
    <InputComLabel idString='endereco' textoLabel='Endereço'/>
    <Botao textoBotao='Botão Simples'/>
    <Botao textoBotao='Outro Botão'/>
    <br />
    {/*exemplo de estilização in-line */}
    <button style={ {color: 'red', backgroundColor: 'lightgreen'} }>Botão Avulso</button>
    {/*exemplo de estilização com passagem de objeto por variavel */}
    <button style={estiloBotao}>Botão Avulso 2</button>
  </>
}

export default App
