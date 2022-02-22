import AboutUs from "./modulos/AboutUs";
import {MentorsProfileModule} from "./modulos/MentorsProfile"
import Home from "./modulos/Home";
import Navbar from "./modulos/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SingUp from "./modulos/SingUp";
import Login from "./modulos/Login";
import React from 'react'





function App() {
  
  
  const [mentorprofileInformation, setMentorProfile] = React.useState({
                                                                        "name":"Merida valiente",
                                                                        "sobremi":"hola yo soy merida valiente",
                                                                        "educacion": "por el momento no tengo educacion",
                                                                        "datosCuriosos":"Soy super ensenando"
                                                                        })
  React.useEffect(() => {
    console.log("Hola desde el efecto")
  },[])

  console.log("asdasd")
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/aboutUS">
            <Navbar />
            <AboutUs />
          </Route>

          <Route path="/mentorsProfile">
            <Navbar />
            <MentorsProfileModule mentorProfileInformationParameter = {mentorprofileInformation} setMentorProfileFunction = {setMentorProfile}/>{/* Se pueden utilizar props se eliminariam 
                                                                                                                                                      mentorProfileInformationParameter
                                                                                                                                                      setMentorProfileFunction*/}
          </Route>

          <Route path="/login">

            <Login />
          </Route>

          <Route path="/singUp">
            <Login esRegistro={true} />
          </Route>

          <Route path="/" exact>
            <Navbar />
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
