import React,{Component} from 'react';
import Content from './content';
import {Navbar,Form,FormControl,Image,Button,NavDropdown,Nav,FormGroup} from 'react-bootstrap';
import Icon from '../image/icon.png';
import {Link} from 'react-router-dom'


class headerOwner extends Component{
    render() {
        return (
            <div style={{backgroundColor: "gray"}}>
                <Navbar>
                <Navbar.Brand><Image src={Icon}></Image></Navbar.Brand>
                <Form inline style={{marginLeft: "24%"}}>
                    <FormGroup>
                    <FormControl type="text" placeholder="Search" style={{width:"270px"}}/>
                    <Button variant="secondary">Search</Button> 
                    </FormGroup>                
                </Form>

                <Nav style={{marginLeft: "28%"}}>
                    <NavDropdown
                    title={
                            <Image roundedCircle 
                                src="https://img.okeinfo.net/content/2019/07/19/612/2080889/kucing-super-imut-ini-gaya-tidurnya-mirip-manusia-menggemaskan-deh-ohvTijCLDt.jpg"
                                alt="user pic"
                                style={{width:"50px",height:"40px"}}
                            />

                    } 
                >
                        <NavDropdown.Item ><Link to="/profileOwner">Profile</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/addProperty">Add Propert</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/historyOwner">History</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/">Log Out</Link></NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar> 
            </div>
        );
    }
}

export default headerOwner