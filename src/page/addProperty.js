import React,{Component} from 'react'
import Icon from './image/icon.png'
import '../App.css'
import {Navbar,Image,Button,Form,FormControl,Container,Row,Col,NavDropdown,Nav  } from 'react-bootstrap';
import {Link} from 'react-router-dom'

class booking extends Component{
    render() {
        return (
            <div>
                <Header></Header>
                <Content></Content>
            </div>
        );
    }
}
// Header
class Header extends Component{
    render() {
        return (
            <Navbar style={{backgroundColor: "gray"}}>
                <Navbar.Brand><Image src={Icon}></Image></Navbar.Brand>
                <Nav style={{marginLeft: "78%"}}>
                <NavDropdown
                    title={
                            <Image roundedCircle 
                                src="https://img.okeinfo.net/content/2019/07/19/612/2080889/kucing-super-imut-ini-gaya-tidurnya-mirip-manusia-menggemaskan-deh-ohvTijCLDt.jpg"
                                alt="user pic"
                                style={{width:"50px",height:"40px"}}
                            />

                    } 
                >
                        <NavDropdown.Item ><Link to="/profile/owner">Profile</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/add/property">Add Propert</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/history/owner">History</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/">Log Out</Link></NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar>                
        );
    }
}

//Content
class Content extends Component{
    render() { 

        return (
            
            <Container >
                <Col sm={6}>
                    <Form>
                      <h4>Add Property</h4>
                      <Form.Group>
                          <Form.Label>Name Property</Form.Label>
                          <Form.Control type="text"/>
                      </Form.Group>
                      
                      <Form.Group>
                          <Form.Label>City</Form.Label>
                          <Form.Control as="select">
                            <option>-</option>
                            <option value="Jakarta">Jakarta</option>
                            <option value="Tangerang Selatan">Tangerang Selatan</option>
                          </Form.Control>
                      </Form.Group> 

                      <Form.Group>
                          <Form.Label>Address</Form.Label>
                          <Form.Control as="textarea" rows="3"/>
                      </Form.Group>

                      <Form.Group>
                          <Form.Label>Price</Form.Label>
                          <Form.Control type="text"/>
                      </Form.Group>

                      <Form.Group>
                          <Form.Label>Type of Rent</Form.Label>
                          <Form.Control as="select">
                            <option>-</option>
                            <option value="Day">Day</option>
                            <option value="Month">Month</option>
                            <option value="Year">Year</option>
                          </Form.Control>
                      </Form.Group> 

                      <Form.Group>
                          <Form.Label>Amenitise</Form.Label>
                          <Form.Check type="checkbox" label="Furnished" />
                          <Form.Check type="checkbox" label="Pet Allowed" />
                          <Form.Check type="checkbox" label="Shared Accomodation" />
                      </Form.Group>

                      <Form.Group>
                          <Form.Label>Bedroom</Form.Label>
                          <Form.Control as="select">
                            <option>-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Form.Control>
                      </Form.Group> 

                      <Form.Group>
                          <Form.Label>Bathroom</Form.Label>
                          <Form.Control as="select">
                            <option>-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Form.Control>
                      </Form.Group> 

                      <Button variant="primary" type="submit">Save</Button>
                  </Form>
                </Col>
            </Container>
        );
    }
}

export default booking