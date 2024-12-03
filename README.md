## ve·loc·i·pede

/vəˈläsəˌpēd/  
An early form of bicycle propelled by working pedals on cranks fitted to the front axle.

## Internal API hobby project

This hobby project features an Express backend that both serves the html page that serves as the entry-point for a React application, but also is able to make requests against the Peloton API. The Express backend will serve as a seam where the Peloton models will be transformed into something the React frontend can better consume, display, and just have some fun with.

The project also features,
* a Mantine UI component-driven UX
* jotai state manager to contain the user session data needed to make API requests
* react query to manage server state
