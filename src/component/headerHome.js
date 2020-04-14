import React,{Component} from 'react';
import Icon from '../image/icon.png';
import {Navbar,Nav,Image,Form,FormControl,Button, FormGroup,Modal,Container,Col,Row} from 'react-bootstrap';
import {Link,ConditionalLink} from 'react-router-dom'



class header extends Component{
    constructor(props){
        super(props)
        this.state={
            showInModal : false,    
            showUpModal : false,

        }
    }

 

        
    
    
    render() {
        // className="justify-content-between"
        return (
            
            // {/* Layout Header */}
        <div>
            <Row bg="white">
                <Col md={{ span: 0, offset: 0 }}>
                    <Navbar >
                        <Navbar.Brand><Image src={Icon}></Image></Navbar.Brand>
                    </Navbar>
                </Col>
                <Col></Col>
                <Col md={{ span: 0, offset: 0 }}>               
                    <Form inline>
                        <FormControl type="text" placeholder="Search"   style={{width:"300px"}}/>
                        <Button variant="secondary">Search</Button>
                    </Form>
                </Col>

                <Col md={{ span: 0, offset: 3 }}>
                    <Nav>
                        <Button  variant="outline-secondary"  onClick={()=>this.setState({showInModal:true,showUpModal:false})}>
                                Sign in
                            </Button>
                    
                        <Button variant="secondary" onClick={()=>this.setState({showInModal:false,showUpModal:true})}>
                            Sign up
                        </Button>                
                    </Nav>
                </Col>
            </Row>
                    {/* Modal Sign in */}
                    <Modal show={this.state.showInModal} onHide={()=>this.setState({showInModal:false})}>
                            <Modal.Header closeButton>
                            <Modal.Body>
                                <Form>
                                <h4 className="text-center">Sign In</h4>
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" 
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password"  
                                    />
                                    </Form.Group>
                                    
                                    <FormGroup>
                                    <Link to="/owner">
                                        <Button 
                
                                        variant="primary" block type="submit">Sign in</Button>
                                        </Link>
                                        <Form.Text className="text-muted text-center">
                                            Don't have an account?  
                                            <Button variant="" onClick={()=>this.setState({showInModal:false,showUpModal:true})}>
                                                Klik Here
                                            </Button>
                                        </Form.Text>
                                    </FormGroup>
                                </Form>
                            </Modal.Body>
                            </Modal.Header>
                        </Modal>
              
            {/* Modal Sign up */}
              <Modal show={this.state.showUpModal} onHide={()=>this.setState({showUpModal:false,showInModal:true})}>
              <Modal.Header closeButton>
               <Modal.Body>
                <Form>
                      <h4 className="text-center">Sign Up</h4>
                      <Form.Group >
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text"/>
                      </Form.Group>
                      
                      <Form.Group >
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email"/>
                      </Form.Group>

                      <Form.Group >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password"/>
                      </Form.Group>
                      
                      <Form.Group >
                          <Form.Label>List As</Form.Label>
                          <Form.Control as="select">
                            <option>List As</option>
                            <option value="Owner">Owner</option>
                            <option value="Tenant">Tenant</option>
                          </Form.Control>
                      </Form.Group> 

                      <Form.Group>
                          <Form.Label>Jenis Kelamin</Form.Label>
                          <Form.Control as="select">
                            <option>Jenis Kelamin</option>
                            <option value="Pria">Pria</option>
                            <option value="Wanita">Wanita</option>
                          </Form.Control>
                      </Form.Group> 

                      <Form.Group>
                          <Form.Label>Address</Form.Label>
                          <Form.Control as="textarea" rows="5"/>
                      </Form.Group>
                        <Link to="/user">
                          <Button variant="primary" onClick={()=>this.setState({showinModal:true,showUpModal:false})}
                          block>Sign Up</Button>
                          </Link>
                  </Form>
                </Modal.Body>
              </Modal.Header>
              </Modal>
              
            </div>
        );
    }

}



export default header