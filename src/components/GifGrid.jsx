
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";


export const GifGrid = ({ category }) => {

    const {images, isLoading } = useFetchGifs( category );

    console.log( {images, isLoading})



  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && (<h2>cargando ...</h2>)
        }
        
        <div className="card-grid">
                { 
                
                    images.map(img => (
                        <GifCard 
                            key = {img.id} 
                            img = {img}
                        />
                    ))
                
                }

        </div>
        <p></p>
    </>
  )
}
