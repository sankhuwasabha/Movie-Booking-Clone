
import Navbar from "../component/Navbar/Navbar.component";
import React from "react";

const DefaultLayoutHoc =
  (Component) => 
   ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
       <div>footer</div>
        
      </div>
    );
  };


export default DefaultLayoutHoc;
