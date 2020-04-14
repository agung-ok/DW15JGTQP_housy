import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './page/home'; 
import HomeUser from './page/homeUser'; 
// import Detail1 from './page/content1';
// import Detail2 from './content2';
// import Detail3 from './content3';
// import Detail4 from './content4';
// import Detail5 from './content5';
// import Detail6 from './content6';
// import ProfileUser from './page/profileUser';
// import Booking from './page/booking'
// import HistoryUser from './page/historyUser';
// import HistoryOwner from './page/historyOwner';
import HomeOwner from './page/homeOwner';
// import AddProperty from './page/addProperty';
// import ProfileOwner from './page/profileOwner';
// import BookingWait from './page/bookingWait';



class App extends Component{

render(){
    return (
      <Router>
      {/* //Routing */}

      <div>
        <Link to="/"></Link>       
        <Link to="/user"></Link> 
        {/* <Link to="/content1"></Link>        */}
        {/* <Link to="/content2"></Link>       
        <Link to="/content3"></Link>       
        <Link to="/content4"></Link>       
        <Link to="/content5"></Link>       
        <Link to="/content6"></Link>        
         <Link to="/profile/user"></Link> 
        <Link to="/profile/owner"></Link>             
        <Link to="/booking"></Link>       
        <Link to="/booking/wait"></Link>       
        <Link to="/history"></Link> */}
        <Link to="/owner"></Link>       
        {/* <Link to="/profile/owner"></Link>       
        <Link to="/add/property"></Link>   */}    
        <Switch>
        {/* <Route path="/content1"><Detail1/>
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
          </Route> */} 

          {/* <Route path="/history/owner"><HistoryOwner/>
          </Route>

          <Route path="/profile/owner"><ProfileOwner/>
          </Route> */}

          <Route path="/owner"><HomeOwner/>
          </Route>

          {/* <Route path="/add/property"><AddProperty/>
          </Route>

          <Route path="/profile/user"><ProfileUser/>
          </Route> 

          <Route path="/booking"><Booking/>
          </Route> 

          <Route path="/bookingwait"><BookingWait/>
          </Route>

          <Route path="/history/user"><HistoryUser/>
          </Route> */}

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
