import create from "./create";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import Navbar from "./Navbar";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import NotFound from "./NotFound"


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
     <div className="content">
      <Switch>
        <Route exact path='/'>
      <Home/>
      </Route>
      <Route path='/create'>
      <create/>
      </Route>
      <Route path='/movies/:id'>
      <MovieDetails  />
      </Route>
      <Route path='*'>
      <NotFound  />
      </Route>
      </Switch>
      </div>
          
     </div>
       
    </Router>
   
     
  );
}

export default App;
