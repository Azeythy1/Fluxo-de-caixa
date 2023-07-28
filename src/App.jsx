

import './App.css'
import { useState } from 'react'
// import DataTable from './components/DataTable'

function App() {
  //Campos iniciados
 const [dataInput, setDataInput]= useState([  
 ])
 const [entrada, setEntrada]=useState()
 const [saida, setSaida]=useState()
 const [nome,setNome] = useState('')
const [valor,setValor] = useState("")
const [checkBox,setCheckBox] = useState(false);

/*acredito que  falta um if para selecionar se osdadosserão para entrada ou saida 
e salvar na tabela dasboard*/


// get value input 
function nomeEntrada(e) {
  setNome(e.target.value)
}

function valorEntrada(e) {
  setValor(e.target.value)
}

function checkBoxEntrada(e) {
  setCheckBox(e.target.checked)
}




function teste() {

  const data = {
    nome: nome,
    valor: valor,
    saida: !checkBox,
  }

  const newData = [...dataInput, data];

  setDataInput(newData)



  var entrada = 0;
  var saida = 0;

  for (var i = 0; i < newData.length; i++) {
    if (newData[i].saida === false) {
      entrada += Number(newData[i].valor);
    } else {
      saida += Number(newData[i].valor);
    }
  }


  setEntrada(entrada)
  setSaida(saida)

  setNome('')
  setValor('')
  setCheckBox(false)
}



  return (
    <>

    {/* Cabeçalho criar */}


     <h1 className='title'>Fluxo de Caixa </h1>

     <div className="inputs">
     <div className="form">
                <div className="boxinput">
                    <input className="ipt lcm" type="text" name="input" placeholder="Nome" 
                    value={nome}
                      onChange={nomeEntrada}/>
                </div> 

                <div className="boxinput">
                    <input className="ipt vlr" 
                    type="number" 
                    name="valor" placeholder="Valor" 
                    value={valor}
                      onChange={valorEntrada}/>
                </div> 
              <div className='container'>
               <label className='switch'>
                <span className='switchText'>Entrada</span>
                <div className='switchWapper'>

                 <input type="checkbox" 
                name="select" 
                className="checkBox" 
                id="ckb" 
                onChange={checkBoxEntrada} 
                value={checkBox}/>
                <span className='switchButton'></span>
                </div>
                  <span className='switchText'>Saida</span>
                </label> 
              </div>
                

            </div>

     <button onClick={teste}>Adicionar</button>
     </div>

     <main>
      <div className="main">
        <div className="cards">
            
            <div className="card entrada">
            <h2 htmlFor="inuput">Entrada</h2>
                <p className='titulo post' >{entrada}</p>
          </div>
         
          <div className="card saida">
          <h2 htmlFor="output">Saida</h2>
            
            <p className='titulo post'>{saida}</p>
   
          </div>
          <div className="card total">
          <h2 htmlFor="res">Total</h2>
            <p className='titulo post'> {entrada-saida}</p>
   
          </div>
        </div>
      </div>

      <div className="dashboard">
        <h1>Balanço Geral</h1>

       
      <table border="1" className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th> Lançamento</th>
            <th> Valor</th>
            <th> Movimento</th>
          </tr>

        </thead>
        <tbody>
          {dataInput.map((item,index)=>(
            <tr key={index}>
               <td>
                {item.id=Math.floor(index++)}
              </td>
              <td>
                {item.data=Date()}
              </td>
              <td>
                {item.nome}
              </td>
              <td>
                {item.valor}
              </td>
              <td>
                {item.saida ? "saida" : "entrada"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      </div>
          
     </main>
    </>
  )
}

export default App
