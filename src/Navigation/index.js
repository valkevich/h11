import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Figure from "../Figure";
  import './style.css'


const Navigation = () => {
    
    const type = ['Circle', 'Square'];
    const [selectedType, setSelectedType] = useState('');

    const colors = ['red', 'gray', 'blue', 'cyan', 'yellow', 'orange'];
    const [selectedColor, setSelectedColor] = useState('red');


    const onSelectType = (type) => {
        setSelectedType(type);
    }

    const onSelectColor = (color) => {
        setSelectedColor(color)
    }


    return (
        <div className='container'>
            <div className='types'>
                {type.map((item) => {
                    return(
                        <Link key={item} to ={`/figure/${item}/${selectedColor}`}>
                            <button onClick={() => onSelectType(item)}>{item}</button>
                        </Link>    
                    )
                })}
            </div>
            <div className='colors'>
                {colors.map((color) => {
                    return(
                        <Link key={color} to ={`/figure/${selectedType}/${color}`}>
                            <button onClick={() => onSelectColor(color)}>{color}</button>
                        </Link>
                    )
                })}
            </div> 
            <Figure className='figure'/> 
        </div>      
    )
}

export default Navigation;