import { useState } from "react";


export function UseFormInput(initialValue){
    const [value,setValue]=useState(initialValue);
    const handleChange=(e, index)=>{
        setValue(index? e: e.target.value)
    }
    return{
        value,
        onchange:handleChange,
        setValue
    }
}