import React from "react";
import './App.css'
import { useState } from 'react';

const Input = (props) => {

    const [input, setInput] = useState('');
    const [priority, setPriority] = useState();

    const inputValue = (e) => {
        if (e)
            setInput(e.target.value);
        else
            setInput(null)
    }
    const priorityValue = (e) => {
        let val = e.target.value;
        // console.log(typeof(val))
        if (val)
            setPriority(val);
        else
            setPriority(0);
    }

    return (
        <>
            <div className='add-item'>
                <input type={Text} onChange={inputValue} value={input} className='input' placeholder='Enter wishlist item' />
                <input type="number" max="100" min="0" value={priority} onChange={priorityValue} className='priority-input' placeholder='Set priority' />
                <button className="add-btn" onClick={() => {
                    if (input)
                        props.addWish(input, priority);
                    setInput("");
                    setPriority(0);
                }}>Add Wish</button>
            </div>

        </>

    )

}

export default Input
