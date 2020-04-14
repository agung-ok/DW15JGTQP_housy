import React,{Component} from 'react';
import Icon from './image/icon.png';
import {Navbar,Form,FormGroup,Container,Row,Col,Image,Card,Button,NavDropdown,Nav} from "react-bootstrap";
import {Link} from 'react-router-dom'
import '../App.css'

class profile extends Component{

    render() {
        return (
        <div>
            {/* Layout */}
            <Header/>
            <div style={{backgroundColor:"lightgray",minHeight: "100vh"}}>
            <br/>
            <Content/>            
            </div>
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
    constructor(){
        super()
        this.state={
            profile : [
                {
                    "image":"https://img.okeinfo.net/content/2019/07/19/612/2080889/kucing-super-imut-ini-gaya-tidurnya-mirip-manusia-menggemaskan-deh-ohvTijCLDt.jpg",
                    "name":"Agung Oktavian",
                    "email":"agoenk.oce@gmail.com",
                    "password":"1234",
                    "listas":"Owner",
                    "gender":"Pria",
                    "nPhone":"085727306291",
                    "address":"Desa Pegandon RT 03 RW 02"
                }
            ]
        }
    };
    render() { 
        return (
            <Container >
            {this.state.profile.map((p)=>{
                return(         
               <Row >
                <Col></Col>
                <Col xs={7}>
                    <Card style={{ width: '48rem' }}>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>Personal Info</Card.Title>
                                <Form>
                                    <Form.Label className="fFontLabel">{p.name}</Form.Label>
                                    <FormGroup>
                                        <Form.Label className="fFontGroup">Full Name</Form.Label>
                                    </FormGroup>

                                    <Form.Label className="fFontLabel">{p.email}</Form.Label>
                                    <FormGroup>
                                        <Form.Label className="fFontGroup">Email</Form.Label>
                                    </FormGroup>

                                    <Form.Label className="fFontLabel"><Button variant="">Change Password</Button></Form.Label>
                                    <FormGroup>
                                        <Form.Label className="fFontGroup">Password</Form.Label>
                                    </FormGroup>

                                    <Form.Label className="fFontLabel">{p.listas}</Form.Label>
                                    <FormGroup>
                                    <Form.Label className="fFontGroup">List As</Form.Label>
                                    </FormGroup>

                                    <Form.Label className="fFontLabel">{p.gender}</Form.Label>
                                    <FormGroup>
                                        <Form.Label className="fFontGroup">Gender</Form.Label>
                                    </FormGroup>

                                    <Form.Label className="fFontLabel">{p.nPhone}</Form.Label>
                                    <FormGroup>
                                        <Form.Label className="fFontGroup">Mobile phone</Form.Label>
                                    </FormGroup>

                                    <Form.Label className="fFontLabel">{p.address}</Form.Label>
                                    <FormGroup>
                                        <Form.Label className="fFontGroup">Address</Form.Label>
                                    </FormGroup>                               
                                </Form>
                        </Col>
                        
                        <Col>
                                    <Image className="fImage" src={p.image}/>
                                    <Button style={{width:"180px"}}>Change Photo Profile</Button>
                        </Col>
                        </Row>
                    </Card.Body>
                    </Card>
                </Col> 
                <Col></Col>               
                </Row>
                )
                })}
            </Container>
        );
    }
}

export default profile