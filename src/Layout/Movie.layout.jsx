
import React from "react";

import MovieNavbar from "../component/Navbar/MovieNavbar.component";

const MovieLayout =
  (Component) => 
   ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <Component {...props} />
        <div>footer</div>
      </div>
    );
  };


export default MovieLayout;
