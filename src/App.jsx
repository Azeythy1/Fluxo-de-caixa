

import './App.css'
import { useState } from 'react'
// import DataTable from './components/DataTable'

function App() {
  //Campos iniciados
 const [dataInput, setDataInput]= useState([])
 const [dataOuput, setDataOutput]= useState([])
 const [inputValue,setInputValue]=useState('')
 const [outputValue,setOutputValue]=useState('')
 const [selectTable, setSelectTable]=useState('')

 const handleInputChange= (e)=>{
  setInputValue(e.target.value)
  console.log(inputValue)
 }
 const handleOutputChange= (e)=>{
  setInputValue(e.target.value)
 }


 const handleAddData=(e)=>{
  e.preventDefault()

 if(selectTable===true){
  setDataInput([...dataInput,inputValue])
 }else if(selectTable===false){
  setDataOutput([...dataOuput,outputValue])
 }
//  setInputValue('')
//  setOutputValue('')

 

 }
  return (
    <>

    {/* Cabeçalho criar */}


     <h1 className='title'>Fluxo de Caixa </h1>

     <div className="inputs">
     <div className="form">
                <div className="boxinput">
                    <input className="ipt lcm" type="text" name="input" placeholder="Lançamento" 
                      onChange={handleInputChange}/>
                </div> 

                <div className="boxinput">
                    <input className="ipt vlr" type="number" name="valor" placeholder="Valor" 
                      onChange={handleOutputChange}/>
                </div> 

                <input type="checkbox" name="select" id="" onChange={setSelectTable}/>Entrada

            </div>

     <button onClick={handleAddData}>Adicionar</button>
     </div>

     <main>
      <div className="main">
        <div className="cards">
            
            <div className="card entrada">
            <h2 htmlFor="inuput">Entrada</h2>
              
                <p className='titulo post' >{inputValue}</p>
          </div>
         
          <div className="card saida">
          <h2 htmlFor="output">Saida</h2>
            
            <p className='titulo post'>Valor {outputValue}</p>
   
          </div>
          <div className="card total">
          <h2 htmlFor="res">Total</h2>
            <p className='titulo post'>Valor {inputValue-outputValue}</p>
   
          </div>
        </div>
      </div>

      <div className="dashboard">
        <h1>Balanço Geral</h1>
        <table border="1">
        {selectTable==='input' &&(
      <table>
        <thead>
          <tr>
            <th> Entradas</th>
          </tr>
        </thead>
        <tbody>
          {dataInput.map((item,index)=>(
            <tr key={index}>
              <td>
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     )}

{selectTable==='output' &&(
      <table>
        <thead>
          <tr>
            <th> Saidas</th>
          </tr>
        </thead>
        <tbody>
          {dataOuput.map((item,index)=>(
            <tr key={index}>
              <td>
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     )}

        </table>
      </div>
          
     </main>
    </>
  )
}

export default App
