import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './home'; 
import HomeUser from './homeUser'; 
import Detail1 from './content1';
import Detail2 from './content2';
import Detail3 from './content3';
import Detail4 from './content4';
import Detail5 from './content5';
import Detail6 from './content6';
import ProfileUser from './profileUser';
import Booking from './booking';
import HistoryUser from './historyUser';
import HistoryOwner from './historyOwner';
import HomeOwner from './homeOwner';
import AddProperty from './addProperty';
import ProfileOwner from './profileOwner'
import BookingWait from './bookingWait'



class App extends Component{

render(){
    return (
      <Router>
      {/* //Routing */}

      <div>
        <Link to="/"></Link>       
        <Link to="/user"></Link> 
        <Link to="/content1"></Link>       
        <Link to="/content2"></Link>       
        <Link to="/content3"></Link>       
        <Link to="/content4"></Link>       
        <Link to="/content5"></Link>       
        <Link to="/content6"></Link>       
        <Link to="/profileUser"></Link> 
        <Link to="/profileOwner"></Link>             
        <Link to="/booking"></Link>       
        <Link to="/bookingWait"></Link>       
        <Link to="/history"></Link>
        <Link to="/owner"></Link>       
        <Link to="/profileOwner"></Link>       
        <Link to="/addProperty"></Link>       
        <Switch>
        <Route path="/content1"><Detail1/>
          </Route>
          <Route path="/content2"><Detail2/>
          </Route>
          <Route path="/content3"><Detail3/>
          </Route>
          <Route path="/content4"><Detail4/>
          </Route>
          <Route path="/content5"><Detail5/>
          </Route>
          <Route path="/content6"><Detail6/>
          </Route>

          <Route path="/historyOwner"><HistoryOwner/>
          </Route>

          <Route path="/profileOwner"><ProfileOwner/>
          </Route>

          <Route path="/owner"><HomeOwner/>
          </Route>

          <Route path="/addProperty"><AddProperty/>
          </Route>

          <Route path="/profileUser"><ProfileUser/>
          </Route>

          <Route path="/booking"><Booking/>
          </Route> 

          <Route path="/bookingWait"><BookingWait/>
          </Route>

          <Route path="/historyUser"><HistoryUser/>
          </Route>

          <Route path="/user"><HomeUser/>
          </Route>

          <Route path="/"><Home/>
          </Route>

        </Switch>
      </div>
    </Router>
    );
  }
}


export default App;
