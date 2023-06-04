# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Book My show clone

react, tailwind, react-slick (carousel), react-icons, react-context-api (State-Managemnt in React) /redux => heavy projects axios

pages: Home.Page.jsx Movie.Page.jsx Play.Page.jsx

HOC(Layouts): Default.Hoc.jsx => Home.Page.jsx, Play.Page.jsx Movie.Hoc.jsx => Movie.Page.jsx

Components: Cast-> Cast.Component.jsx Enternemaintent -> EnternainmentCard.Component.jsx HeroCarousel => -> HeroCarousel.Component.jsx -> Arrows.Components.jsx (Configuration File) MovieHero => -> MovieHero.Component.jsx
-> MovieInfo.Component.jsx Navbar =>
-> MovieNavbar.Component.jsx ->Navbar.Component.jsx PaymentModal -> Payment.Component.jsx
PlayFilters -> PlayFilters.Component.jsx Poster -> Poster.Component.jsx PosterSlider -> PosterSlider.Component.jsx


Book-my-show-clone
react,
tailwind,
react-silk(carousel) //for slideshow 
react-icons,
react-context-api(state-management in react)/redux=>heavy project
axios //for apis

Pages:
Home.page.jsx
Movie.page.jsx
play.page.jsx

HOC(layouts):
Default.Hoc.jsx=>Home.page.jsx, play.page.jsx
movie.hoc.jsx=>movie.page.jsx

component:
cast=>cast.component.jsx
entertaintment=>entertaintment.component.jsx
Herocarousel=>
             =>moviehero.component.jsx
             =>arrows.component.jsx
MovieHero=> 
           =>Moviehero.component.jsx
           =>MovieInfo.component.jsx
Navbar=>  
         =>movienavbar.component.jsx
           navbar.component.jsx
PaymentModel=>payment.component.jsx
playfilters=> playfilters.component.jsx
posterslider=>posterslider.component.jsx


react-context-api:where we can store or update date from any component
(i.e child components and then can access it any where in the components)