// import { useState } from "react";
import Buttons from "./Button";
import './inputs.css';
const Inputs = () => {
  

    

    
    
//Tratar os dados


    return ( 
        <>
            <div className="form">
                <div className="boxinput">
                    <input className="ipt lcm" type="text" name="lancamento" placeholder="Lançamento" />

                    <input className="ipt vlr" type="number" name="valor" placeholder="Valor" />
                </div>

            <span className="cardBox">
                <label htmlFor="entrada">Entrada</label>
             <input className="ckb" type="checkbox" name="entrada" 
             />


             <label htmlFor="saida">Saida</label>
             <input className="ckb" type="checkbox" name="saida" />

            </span>
    
                <Buttons />
            </div>

        </>

     );
}
 
export default Inputs;