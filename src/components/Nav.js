import '../styles/Nav.css'
import React from "react";//importation de la bibliotheque de react
import Curriculum from "./Curriculum"
import Diplome from './Diplome'
import Accueil from './Accueil';
import Evaluation from './Evaluation'



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";



function Nav(){
    return(
        <Router>
            <div>
                <nav>
                    <ul className='nav'>
                        <button>
                            <Link to="/">Accueil</Link>
                        </button>
                        <button>
                            <Link to="/diplome">Diplôme et certification</Link>
                        </button>
                        <button>
                            <Link to="/curriculum">Curriculum vitea</Link>
                        </button>
                        <button>
                            <Link to="/evaluation">Exemple d'evaluation</Link>
                        </button>
                       
                        
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/curriculum">
                    <Curriculum/>
                </Route>
                <Route path="/diplome">
                    <Diplome/>
                </Route>
                <Route path="/evaluation">
                    <Evaluation/>
                </Route>
                
                <Route path="/">
                    <Accueil/>
                </Route>
               
            </Switch>
       </Router>
    );
    
}

export default Nav;

