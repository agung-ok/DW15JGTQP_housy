import React,{Component} from 'react';
import Icon from './image/icon.png';
import {Navbar,Image, Container,Jumbotron,Nav,NavDropdown,Table,Button,Modal,Form,FormGroup} from 'react-bootstrap';
import {onChange,onClickItem,onClickThumb} from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link} from 'react-router-dom';


class detailContent extends Component{
    render() {
        return (
            <div>  
                <Header/> 
                <Content/> 
            </div>
        );
    }
}

class Header extends Component{
    render() {
        const nav_color = {
            backgroundColor: "gray",
          };
        
        return (
            <div style={nav_color}>
            <Navbar>
                <Link to="/user">
                    <Navbar.Brand><Image src={Icon}></Image></Navbar.Brand>
                </Link>
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
                        <NavDropdown.Item ><Link to="/profileUser">Profile</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/bookingWait">My Booking</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/historyUser">History</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/">Log Out</Link></NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar>
            </div>
        );
    }
}

// Content

class Content extends Component{

    constructor(){
        super()
        this.state={
            image:[
                    "https://www.sewa-villa.com/images1/1052_5.jpg",
                    "https://rumahhokie.com/beritaproperti/wp-content/uploads/2019/01/Tips-Membuat-Taman-Depan-di-Lahan-Minimalis-RumahHokie.com-kliknclean.jpg",
                    "https://rumahminimalisan.info/wp-content/uploads/2018/01/Taman-halaman-depan-rumah.jpg",
                    "https://www.architectureartdesigns.com/wp-content/uploads/2016/06/19-10-630x418.jpg",
                    "https://www.drench.co.uk/wp/wp-content/uploads/2016/07/prosconsimage.png",
                    "https://st.hzcdn.com/simgs/c40170120beed6d7_4-5838/home-design.jpg"
                ]
            }
        }
 

    
render() {
    return (
        <div >
            
            <Jumbotron stylr={{position:"fixed",}} >
                <Container>
                    <Carousel style={{backgroundColor: "White"}} showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                    {this.state.image.map((Image,i)=>{
                        return(
                            <div  key={i}>
                                <img src={Image} />
                            </div>
                        )
                    })}
                </Carousel>
                    <Container>
                        <Table>
                            <tr>
                                <th className="fContentTittle">House Astina</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="fContentBudget">Rp.3.000.000</th>
                                <th>
                                    <Container className="fContentRoom">
                                        Bedroom
                                    </Container>
                                </th>
                                <th>
                                <   Container className="fContentRoom">
                                        Bathroom
                                    </Container>
                                </th>
                                <th>
                                    <Container className="fContentRoom">
                                        Area
                                    </Container>
                                </th>
                            </tr>
                            <tr>
                                <td className="fContentAddress">Jalan Bersama</td>
                                <th>
                                    <Container className="fContentRoomIsi">
                                        1
                                    </Container>
                                </th>
                                <th>
                                    <Container className="fContentRoomIsi">
                                        1
                                    </Container>
                                </th>
                                <th>
                                    <Container className="fContentRoomIsi">
                                        870
                                    </Container>
                                </th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th className="fContentDeskripsi">Deskripsi</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td className="fContentDeskripsiIsi">Sangat nyamar untuk ditinggali</td>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>
                                <Container>
                                        <Button variant="primary" onClick={()=>this.setState({showInModal:true,showUpModal:false})}
                                            >BOOK NOW</Button>
                                    </Container>
                                    <Modal show={this.state.showInModal} onHide={()=>this.setState({showInModal:false})}>
                                    <Modal.Header closeButton>
                                    <Modal.Body>
                                        <Form>
                                        <h4 className="text-center">How long you will stay</h4>
                                            <Form.Group>
                                                <Form.Label>Check-in</Form.Label>
                                                <Form.Control as="select">
                                                    <option>-</option>
                                                    <option value="days">Days</option>
                                                    <option value="months">Months</option>
                                                    <option value="years">Years</option>
                                                </Form.Control>                                                
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Check-out</Form.Label>
                                                <Form.Control as="select">
                                                    <option>-</option>
                                                    <option value="days">Days</option>
                                                    <option value="months">Months</option>
                                                    <option value="years">Years</option>
                                                </Form.Control>                                            
                                            </Form.Group>
                                            
                                            <FormGroup>
                                            <Link to="/booking">
                                                <Button 
                        
                                                variant="primary" block type="submit">Order</Button>
                                            </Link>
                                            </FormGroup>
                                        </Form>
                                    </Modal.Body>
                                    </Modal.Header>
                                </Modal>
                                </th>
                            </tr>
                        </Table>
                    </Container>
                </Container>
            </Jumbotron>
        </div>
    );
}
          


              
}
        
        

export default detailContent