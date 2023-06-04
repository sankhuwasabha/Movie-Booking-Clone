import React, { useState,useContext } from "react";
import { MovieContext } from "../../context/Movie.content";
const MovieInfo = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const [Price, setPrice] = useState(0);
     const { movie } = useContext(MovieContext);
    const genres = movie.genres?.map(({ name }) => name).join(",");
    const rentMovies = () => {
        setIsOpen(true);
        setPrice(150);

        
    }

    const BuyMovies = () => {
        setIsOpen(true);
        setPrice(1000);
        
    }
    return <>
        {/* <paymentModel setIsOpen={setIsOpen} isopen={isopen} price={price}/> */}
         
            <div className="flex flex-col gap-4">
                <h1 className="text-white text-5xl font-bold">{movie.original_title}</h1>
                    <div className="text-white flex flex-col gap-2">
                        <h4>5k ratings</h4>
                        <h4>Nepali,English,Hindi</h4>
                        <h4>{movie.runtime}min|{genres}</h4>
            </div>
            <div className="flex items-center gap-3 w-full">
                    <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"> Rent रु 150</button>
                    <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"> Buy रु 1000</button>

                </div>
                    
                </div>
                
                
           
    </>
}
export default MovieInfo;