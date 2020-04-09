import React,{Component} from 'react';
import './App.css';
import icon from './image/icon.png';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ToggleButtonGroup,ToggleButton,Form,FormControl,Button,FormGroup } from 'react-bootstrap';







class App extends Component{
  render() {
    return (
      //Layout
      <div className="App">
        <Header/>
        <Filter/>
        <Content/>
      </div>
    );
  }
}

class Header extends Component{
  constructor(){
    super();
    this.state = {
        SignInshowModal : false,    
        SignUpshowModal : false   
        }
    }



    
  render() {
    return (
      //Header
      // <Router>
      <div className="App-header">
        <img src={icon} alt="icon" style={{position: "absolute",width: "138px",height: "71px",left: "50px"}}/>
        <Form inline className="App-search">
            <FormControl
              value={this.state.searchText}
              type="text"
              placeholder="Search"
            />
            <Button variant="outline-info">
              Search
            </Button>
          </Form>

          {/* Modal Sign in */}
          <Button variant="outline-info" className="bsignin" onClick={()=>this.setState({SignInshowModal:true,SignUpshowModal:false})}>
              Sign in
          </Button>

          <div>
            {/* Modal sign up */}
            <Button variant="secondary" className="bsignup" onClick={()=>this.setState({SignInshowModal:false,SignUpshowModal:true})}>
                Sign up
              </Button>

          </div>
      </div>

    );
  }
}

class Filter extends Component{
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  
  render() {
    return (      
      //Filter
      <div className="App-filter">     
        <form action="">
            <p className="rent">Type of Rent</p>
             <ToggleButtonGroup  type="Radio" className="buttong">
                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2" value="Day">
                  Day
                </ToggleButton>
                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="Month">
                  Month
                </ToggleButton>
                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="Year">
                  Year
                </ToggleButton>
            </ToggleButtonGroup> 
            <p className="rent" style={{top: "300px"}}>Date</p>
            <div className="dates">
              <DatePicker 
                selected={this.state.startDate}
                onChange={this.handleChange} 
                className ="dates2"
                dateFormat="dd MMMM yyyy"
              />
            </div>
            <p className="proper">Property Room</p>
            <ToggleButtonGroup  type="Radio" className="bproper">
                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2" value="1">
                  1
                </ToggleButton>
                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="2">
                  2
                </ToggleButton>
                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="3">
                  3
                </ToggleButton>
                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="4">
                  4
                </ToggleButton>
                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="5">
                  5+
                </ToggleButton>
            </ToggleButtonGroup>
            <p className="room">Bedroom</p>
            <ToggleButtonGroup  type="Radio" className="bproper" style={{top: "591px"}}>
                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2" value="1">
                  1
                </ToggleButton>
                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="2">
                  2
                </ToggleButton>
                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="3">
                  3
                </ToggleButton>
                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="4">
                  4
                </ToggleButton>
                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="5">
                  5+
                </ToggleButton>
            </ToggleButtonGroup>
            <p className="room" style={{top: "562px"}}>Bathroom</p>
            <p className="proper" style={{top:"666px"}}>Amenities</p>
            <label className="room" style={{top: "709px"}}><input type="checkbox" value="furnished"/> Furnished</label>
            <label className="room" style={{width: "104px",top: "744px"}}><input type="checkbox" value="petAllowed"/> Pet Allowed</label>
            <label className="room" style={{width: "187px",top: "779px"}}><input type="checkbox" value="sharedAccomodation"/> Shared Accomodation</label>
            <p className="proper" style={{top:"839px"}}>Budget</p>
            <p className="font">Less than IDR</p>
            <select className="ibudget">
              <option>Budget</option>
              <option value="300000">3.000.000</option>
              <option value="500000">5.000.000</option>
              <option value="800000">8.000.000</option>
            </select>
            <button className="bapply">Apply</button>
        </form>

      </div>
    );
  }
}

class Content extends Component{
  render() {
    const alamat="Tangerang Selatan, Podok Aren";     
    return (
      //Content
      <div className="App-content">
        <div className="content">
            <img alt="gambar1" className="image" src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20004922-ec4543a7c07f7e8b3477f103baf088a6.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit"/>  
            <div className="tagscontent">
              <p className="ttagscontent">Tags</p>
            </div>
              <p className="tharga">Rp.9.000.000/Year</p>
              <p className="tinfo">3 Beds, 2 Baths, 1,800 sqft</p>
              <p className="talamat">{alamat}</p>
        </div>
        <div className="content" style={{left: "317px"}}>
          <img alt="gambar2" className="image" src="https://r-cf.bstatic.com/images/hotel/max1024x768/105/105794874.jpg"/>  
          <div className="tagscontent">
              <p className="ttagscontent">Tags</p>
          </div>
              <p className="tharga">Rp.3.000.000/Year</p>
              <p className="tinfo">1 Beds, 1 Baths, 800 sqft</p>
              <p className="talamat">{alamat}</p>
        </div>
        <div className="content" style={{left: "632px"}}>
          <img alt="gambar3" className="image" src="https://origin.pegipegi.com/jalan/images/pict1L/Y1/Y982201/Y982201001.jpg"/>
          <div className="tagscontent">
              <p className="ttagscontent">Tags</p>
          </div>
              <p className="tharga">Rp.5.000.000/Year</p>
              <p className="tinfo">2 Beds, 1 Baths, 1,200 sqft</p>
              <p className="talamat">{alamat}</p>
        </div>
        <div className="content" style={{left: "2px", top: "275px"}}>
        <img alt="gambar4" className="image" src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/213771590.jpg?k=b502bac65478de98b402f303da1c4748f3d91a40ce0aeef9d88eaf07ae7eb46f&o="/>
          <div className="tagscontent">
              <p className="ttagscontent">Tags</p>
          </div>
              <p className="tharga">Rp.13.000.000/Year</p>
              <p className="tinfo">4 Beds, 3 Baths, 2,200 sqft</p>
              <p className="talamat">{alamat}</p>
        </div>
        <div className="content" style={{left: "319px",top: "275px"}}>
          <img alt="gambar5" className="image" src="https://r-cf.bstatic.com/images/hotel/max1024x768/160/160325998.jpg"/>
              <div className="tagscontent">
                  <p className="ttagscontent">Tags</p>
              </div>
              <p className="tharga">Rp.3.500.000/Year</p>
              <p className="tinfo">1 Beds, 1 Baths, 870 sqft</p>
              <p className="talamat">{alamat}</p>
        </div>
        <div className="content" style={{left: "634px",top: "275px"}}>
          <img alt="gambar6" className="image" src="https://q-cf.bstatic.com/images/hotel/max1024x768/213/213772608.jpg"/>
          <div className="tagscontent">
                  <p className="ttagscontent">Tags</p>
              </div>
              <p className="tharga">Rp.5.500.000/Year</p>
              <p className="tinfo">2 Beds, 2 Baths, 1.900 sqft</p>
              <p className="talamat">{alamat}</p>
        </div>
      </div>
    );
  }
}


export default App;
