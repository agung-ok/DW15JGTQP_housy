import React,{Component} from 'react';
import {Navbar,Form,FormControl,Image,Button,NavDropdown,Nav,FormGroup,Row,Col} from 'react-bootstrap';
import Icon from '../image/icon.png';
import {Link} from 'react-router-dom'


class HeaderUser extends Component{
    render() {
        return (
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
                            <NavDropdown
                            title={
                                    <Image roundedCircle 
                                        src="https://img.okeinfo.net/content/2019/07/19/612/2080889/kucing-super-imut-ini-gaya-tidurnya-mirip-manusia-menggemaskan-deh-ohvTijCLDt.jpg"
                                        alt="user pic"
                                        style={{width:"50px",height:"40px"}}
                                    />} 
                                >
                                    <NavDropdown.Item ><Link to="/profile/user">Profile</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/bookingwait">My Booking</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/history/user">History</Link></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link to="/">Log Out</Link></NavDropdown.Item>
                        </NavDropdown>              
                    </Nav>
                </Col>
            </Row>
        </div>
        );
    }
}

export default HeaderUser