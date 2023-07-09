
import './App.css'
import Inputs from './components/inputs'

function App() {
  

  return (
    <>

    {/* Cabeçalho criar */}


     <h1 className='title'>Fluxo de Caixa </h1>

     <div className="inputs">
      <Inputs/>  
     </div>

     <main>
      <div className="main">
        <div className="cards">
          <div className="card entrada">
            <h2 className="card-title">Entradas</h2>
            <p className='titulo post'>Valor (1554151515)</p>
   
          </div>

          <div className="card saida">
            <h2 className="card-title">Saida</h2>
            <p className='titulo post'>Valor (1554151515)</p>
   
          </div>
          <div className="card total">
            <h2 className="card-title">Total</h2>
            <p className='titulo post'>Valor (1554151515)</p>
   
          </div>
        </div>
      </div>

      <div className="dashboard">
        <h1>Balanço Geral</h1>
      </div>
     </main>
    </>
  )
}

export default App
