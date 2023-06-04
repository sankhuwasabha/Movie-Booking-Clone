
import React, { useState } from "react";

import HeroSlider from "react-slick";
import { NextArrow, PreviousArrow } from "./Arrows.component";

const Herocarousel = () => {
  const [images, setImages] = useState([
   

     // {
    //   firstimg: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    //   secondimg: "https://thumbs.dreamstime.com/b/fruit-2999796.jpg",
    //   third: "https://m.media-amazon.com/images/M/MV5BMTgyNDgyNzQxMl5BMl5BanBnXkFtZTgwOTc3OTQ3MTE@._V1_.jpg",
    //   fourth:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TdOmvx_z9OpyemgYgQILhwWT-2MsyA7DfndoSRWcCQ&s"
    // }
    {
      adult: false,
      backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      genre_ids: [16, 878, 28],
      id: 610150,
      original_language: "ja",
      original_title: "ドラゴンボール超 スーパーヒーロー",
      overview:
        "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
      popularity: 5953.989,
      poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
      release_date: "2022-06-11",
      title: "Dragon Ball Super: Super Hero",
      video: false,
      vote_average: 8,
      vote_count: 1426,
    },
    {
      adult: false,
      backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
      genre_ids: [53],
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
      popularity: 6731.327,
      poster_path: "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 346,
    },
  ]);

  const settingsSLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase:"linear"
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
     cssEase:"linear"
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((images) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                 src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                
                alt="hero banner"
                className="w-full rounded-md object-cover"
                
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settingsSLG}>
          {images.map((images) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                
              
                alt="hero banner"
                className="w-full h-full rounded-md object-cover"
              
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

 export default Herocarousel;



// import React, { useState } from "react";

// import HeroSlider from "react-slick";
// import { NextArrow, PreviousArrow } from "./Arrows.component";
// import rajimage from "../../fb.jpg";
// import gitimage from "../../github.jpg.png";

// const Herocarousel = () => {
//   const [images, setImages] = useState([rajimage,gitimage
//     // "https://thumbs.dreamstime.com/b/fruit-2999796.jpg",
//     // "https://thumbs.dreamstime.com/b/fruit-2999796.jpg",
   

//   ]);

//   const settingsSLG = {
//     arrows: true,
//     slidesToShow: 1,
//     infinite: true,
//     speed: 500,
//     nextArrow: <NextArrow />,
//     prevArrow: <PreviousArrow />,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };

//   const settings = {
//     arrows: true,
//     slidesToShow: 1,
//     infinite: true,
//     speed: 500,
//     nextArrow: <NextArrow />,
//     prevArrow: <PreviousArrow />,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };

//   return (
//     <>
//       <div className="lg:hidden">
//         <HeroSlider {...settings}>
//           {images.map((image, index) => (
//             <div key={index} className="w-full h-56 md:h-80 py-3">
//               <img
//                 src={image}
//                 alt="hero banner"
//                 className="w-full rounded-md object-cover"
//               />
//             </div>
//           ))}
//         </HeroSlider>
//       </div>

//       <div className="hidden lg:block">
//         <HeroSlider {...settingsSLG}>
//           {images.map((image, index) => (
//             <div key={index} className="w-full h-96 px-2 py-3">
//               <img
//                 src={image}
//                 alt="hero banner"
//                 className="w-full h-full rounded-md object-cover"
//               />
//             </div>
//           ))}
//         </HeroSlider>
//       </div>
//     </>
//   );
// };

// export default Herocarousel;
