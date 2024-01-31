import Produto from "./Produto"

const listaInstrumentos = [
  {nomeInstrumento:  'Guitarra', estoqueInstrumento: 12},
  {nomeInstrumento:  'Piano', estoqueInstrumento: 2},
  {nomeInstrumento:  'Bateria', estoqueInstrumento: 6},
  {nomeInstrumento:  'Pandeiro', estoqueInstrumento: 0},
  {nomeInstrumento:  'Ukulele', estoqueInstrumento: 5},
  {nomeInstrumento:  'Flauta', estoqueInstrumento: 0}
]

function App() {
  

  return <>
    <h1>Rendenização</h1>
    {/*<Produto nome='Guitarra' estoque={true}/>
    <Produto nome='Ukulele' estoque/>
    <Produto nome='Banjo' />*/}
    {
      listaInstrumentos.map((elemento, indice)=>{
        return <Produto 
        key={indice}
        nome= {elemento.nomeInstrumento} 
        estoque={elemento.estoqueInstrumento}/>
      })
    }
  </>
}

export default App
