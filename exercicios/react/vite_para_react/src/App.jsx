
function App() {
  const labelDoInput = 'idade'
  
  return <>
    <h1>Arquivo App.jsx</h1>
    <p>Texto do Arquivo App.jsx</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto illo rem, non consequuntur nesciunt magni alias enim debitis rerum quibusdam voluptate ea, cum, iure voluptatem corporis iste molestias provident possimus?</p>
    <div />
    
    <label htmlFor={labelDoInput}>Idade</label>
    <input type="text" id="idade" />

    {
      ' teste '+ 'de ' + 'espressões '+ 'dentro '+'de '+'chaves { }'
    }
    <br/>
    <label htmlFor="saida">Saída</label>
    <textarea name="saida" id="saida" cols="30" rows="10">{'Idade : '}</textarea>
  </>
}

export default App
