import { useState } from "react"



export const AddCategory = ({ onNewCategory }) => {
  
const [inputValue, setInputValue] = useState('')

const onSubmit = (e)=>{
    e.preventDefault();
    if (inputValue.trim().length <=1) return;

    onNewCategory( inputValue)
    setInputValue('')
}



    return (
        <form onSubmit={ e => onSubmit(e) }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                onChange={ e => setInputValue(e.target.value) }
                value= { inputValue }
            />
    </form>
  )
}
