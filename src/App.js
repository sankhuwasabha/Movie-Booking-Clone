import "./App.css";
import axios from "axios";


//pages
import Playpage from "./Pages/Play.page";
import Moviespage from "./Pages/Movie.page";
import Homepage from "./Pages/Home.page";
//Routes
import { Route, Routes } from "react-router-dom";


//react silk css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
//  axios.defaults.params["api_key"] = process.env.MYKEY;
 axios.defaults.params["api_key"] = "bcc2f49be5adcc259fb623932b69159a";





function App() {
    return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movie/:id" element={<Moviespage />} />
      <Route path="/plays" element={<Playpage />} />
    </Routes>
      
  );
}

export default App;
