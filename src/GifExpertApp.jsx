
import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {

        const [categories, setCategories] = useState([]);

        const onAddCategory=(inputValue)=>{

            if(categories.includes(inputValue)) return;
           


            setCategories([inputValue,...categories]);
     }


  return (
    <>
  
    <h1>GifExpertApp</h1>
    
 
    <AddCategory OnAddCategory={onAddCategory}/>


    {categories.map((category)=>
         (
            <GifGrid key={category} category={category}/>       
        )
    )}
  
    </>
  );
}
