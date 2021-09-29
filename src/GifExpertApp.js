import React, {useState} from 'react'
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid'
const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['one Punch']);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'Friends'])
    // }
    return (
        <>
            <h2>GigExpertApp</h2>
            <AddCategory setCategories={setCategories} /> 
            <hr></hr>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category}/>
                    ))
                        
                    
                }
            </ol>              
        </>
    )
}

export default GifExpertApp
