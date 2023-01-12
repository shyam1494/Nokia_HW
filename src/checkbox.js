import { useState,useEffect } from "react";
import { toppings } from "./data";
import "./styles.css";

export default function Checkbox(props) {
    
    const [checkedState, setCheckedState] = useState(
        {
        capsicum:false,
        paneer:false,
        parika:false,
        onions:false,
        cheese:false,
        corns:false,
        mushroom:false

        }
    );

    const handleOnChange = (e,name) => {
        
        setCheckedState(prevState => ({
            ...prevState,
            [name]: e.target.checked
          }))
        
    };

    useEffect( () => {
        let filtered = Object.keys(checkedState).filter((keys) => checkedState[keys] === true)
        props.sendData({
            selectedToppings:filtered
            })
    },[checkedState])

                
    return (
    <div className="child-font">        
       
        <ul className="array-list">
         {/* <h3>Select Toppings<button className='size-button'>Optional</button></h3> */}
           <h3>Select Toppings</h3>
            {toppings.map(({ name, price }, index) => {
                return (
                    <li key={index}>
                        <div className="array-item">
                            <div className="left-section">
                                <input 
                                    type="checkbox"
                                    id={`toppings-checkbox-${index}`}
                                    name={name}
                                    value={name}
                                    checked={checkedState[index]}
                                    onChange={(e) => handleOnChange(e,name)}
                                />
                                <label htmlFor={`toppings-checkbox-${index}`}>{name}</label>
                            </div>
                             <div className="right-section">${price.toFixed(2)}</div>
                        </div>
                    </li>
            );
            })}              
        </ul>
    </div>        
    );
}
