import React,{useState,useEffect} from 'react';
import {PizzaSize} from './data'
import "./styles.css";

export default function Radio(props){
    let [pizzaType,setPizzaType] = useState({
        type:'',
        price:0
    })   
    const handleOnChange = (e,receivedPrice) =>{
        setPizzaType(prevState => ({
            ...prevState,
            type:e.target.value,
            price:receivedPrice
          }))
     
    } 

    useEffect( () => {       
        props.radioCallback({
            type:pizzaType.type,
            priceOfPizza:pizzaType.price
        })

    },[pizzaType])
   
    return(
        <div className="child-font"> 
        <ul className="array-list">    
            <h3>Choose Size</h3>
            {PizzaSize.map(({ name, price }, index) => {  
                return (
                    <li key={index}>     
                        <div className="array-item">
                            <div className="description">
                                <input  
                                    type="radio" 
                                    id={`radio-${index}`} 
                                    name='pizza-size'
                                    value={name}  
                                    onChange={(e) => handleOnChange(e,price)}                        
                                />
                                <label htmlFor={`radio-${index}`}>{name}</label>
                            </div>
                            <div className="price">${price.toFixed(2)}</div>
                        </div>
                    </li>
                );
            })}
        </ul>       
        </div>
    )
}
 
 