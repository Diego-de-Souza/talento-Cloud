import styles from './Produto.module.css'

function Produto({nome, estoque}){
    {/**faz aparecer somente o elemento que tiver o valor positivo 
    if(!estoque)return null
    */}
    return <div className={`${styles.container} ${estoque ? '':styles.indisponivel }`}>
        <h3>Produto: {nome}</h3>
        {/*Passando o operador ternario direto no elemento para enchugar o codigo 
        <p style={{color: estoque? 'green':'red'}}>Estoque: {estoque ? 'Disponível': 'Indisponível'}</p>*/}
        <p style={{color: estoque? 'green':'red'}}>Estoque: {estoque > 0 ? estoque: 'Indisponível'}</p>
    </div>
}


export default Produto