import React,{useState,useEffect} from 'react'
import Radio from './radio'
import Checkbox from './checkbox'
import './styles.css';
import image from './assets/images/pizza.png'
function Summary() {

  const [state,setState] = useState({
    totalCost : 0.00,
    priceOfPizza: 0.00,
    type:' ',
    selectedToppings: []

  })

  let recieveRadio = ( data) => {
    setState(prevState => ({
        ...prevState,
        type:data.type,
        priceOfPizza:data.priceOfPizza
    }))

  }

  let recieveCheckBox = ( data) => {
    setState(prevState => ({
        ...prevState,
        selectedToppings:data.selectedToppings
    }))

  }
  // UseEffect for Cost calculation:
  useEffect(() => {
    let cost =state.priceOfPizza +  state.selectedToppings.length * 1.50
    setState(prevState => ({
        ...prevState,
        totalCost:cost
    }))
  },[state.type,state.selectedToppings])

  console.log('Summary _State',state)
  return (
    <>  
        <img src={image} alt='pizzaImage'></img>
         <h3 className='pizza-header'>Classic Peproni</h3>
        <Radio radioCallback={recieveRadio}/>
        <Checkbox sendData={recieveCheckBox}/><br></br>
        <div className='section-break'></div>
        <div className='summary-container'>
            <h3>Summary:</h3>
            <p>Pizza size:{state.type}</p>
            <p>Toppings: {state.selectedToppings.toString()}</p>
            <p>Total Cost: ${state.totalCost.toFixed(2)}</p>    
        </div>
    </>
  )
}

export default Summary