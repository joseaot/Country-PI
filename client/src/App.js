import { Landing, Home, Form, Detail } from "./view"; 
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";





function App() {

  const location = useLocation();



  return (
    <div>
        {location.pathname !== "/" && <NavBar/>}
        <Route exact path='/'><Landing/></Route>
        <Route path='/home'><Home/></Route>
        <Route path='/detail/:id'><Detail/></Route>
        <Route path='/crear'><Form/></Route>
    </div>
  );
}

export default App;
