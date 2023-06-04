 import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios" //for apis
//importing layout

import DefaultLayoutHoc from "../Layout/Default.layout";
//importing component

import Herocarousel from "../component/Herocarousel/Herocarousel.component";
import EntertaintmentCardslider from "../component/Entertaintment/EntertaintmentCardComponent";
import PosterSlider from "../component/PosterSlider/PosterSlider.component";



const Homepage = () => {
  const [recommendedmovies, setrecommendedmovies] = useState([]);
  const [Premiummovies, setPremiummovies] = useState([]);

  const [OnlineStreamEvent, setOnlineStreamEvent] = useState([]);
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("movie/popular")
      setrecommendedmovies(getPopularMovies.data.results);
    };

  
  
  requestPopularMovies();
  }, []);
  

   useEffect(() => {
    const requestTopratedMovies = async () => {
      const getTopRatedMovies = await axios.get("movie/top_rated")
      setPremiummovies(getTopRatedMovies.data.results);
    };

  
  
  requestTopratedMovies();
   }, []);
  
   useEffect(() => {
     const requestUpcomingMovies = async () => {
      //https://api.themoviedb.org/3/ movie/upcoming?api_key=bcc2f49be5adcc259fb623932b69159a
      const getUpcomingMovies = await axios.get("movie/upcoming")
      setOnlineStreamEvent(getUpcomingMovies.data.results);
    };

  
  
  requestUpcomingMovies();
}, []);

  return (
    <>
   
      <Herocarousel />
      <div className="container mx-auto px-4 md:px-12-3">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3.5">The best of entertaintment</h1>
        <EntertaintmentCardslider />

        <div className="container mx-auto px-4 md:px-12-3">
          <PosterSlider
            title="Recommended Movies"
            subTitle="list of Recommended movies"
            posters={recommendedmovies}
            isDark={false}
          />
        </div>
        <div className="bg-premier-800 py-12">
          <div className="container mx-auto px-4 md:px-12 my-8 flex-col gap-3">
            <div className="hidden md:flex">
              <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
                 alt="rupay"className="h-full w-full "/>
              
            </div>
            <div className="container mx-auto px-4 md:px 12 my-8 flex flex-col gap-3">  </div>
            <PosterSlider title="premiers"
              subject="Brand new releases every friday"
              posters={Premiummovies} 
            isDark={true}/>
         
     
         </div>

        </div>
      </div>
      <div className="container mx-auto px-4 md:px 12 my-8 flex flex-col gap-3">  

        <PosterSlider title="online Streaming event"
          //subject blank?
          subject=""
          posters={OnlineStreamEvent}
          isDark={false}/>
        
      </div>

        </>
    
   
      
    
    

    //  we can write <div></div> as which is called fragment <>homepage</>
  );
}

export default DefaultLayoutHoc(Homepage);




