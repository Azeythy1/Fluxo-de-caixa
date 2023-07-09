import Buttons from "./Button";
import './inputs.css';
const Inputs = (props) => {
    return ( 
        <>
            <div className="form">
                <div className="boxinput">
                    <input className="ipt" type="text" name="lancamento" placeholder="Lançamento" />

                    <input className="ipt" type="number" name="valor" placeholder="Valor" />
                </div>

            <span className="cardBox">
                <label htmlFor="entrada">Entrada</label>
             <input className="ckb" type="checkbox" name="entrada"/>
             <label htmlFor="saida">Saida</label>
             <input className="ckb" type="checkbox" name="saida" />

            </span>
    
                <Buttons />
            </div>
        </>

     );
}
 
export default Inputs;