import { useState } from "react"

export const AddCategory = ({OnAddCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange=(event)=>{
    
        setInputValue(event.target.value);
    }

    
    const onSubmit=(event)=>{
        event.preventDefault();//Al darlte enter, evita que la pagina se refresque automaticamente
        if(inputValue.trim().length<=1) return;
    
        OnAddCategory(inputValue.trim());

        setInputValue('');

    }

  return (

    <form onSubmit={(event)=>onSubmit(event)}>

        <input 
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(event)=>{
            onInputChange(event);
        }}
        />


    </form>
  )
}
