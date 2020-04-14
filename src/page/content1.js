import React,{Component} from 'react';
import Header from './component/headerHome'
import {Container,Table,Button,Modal,Form,FormGroup} from 'react-bootstrap';
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

// Content

class Content extends Component{

    constructor(){
        super()
        this.state={
            image:[
                    "https://origin.pegipegi.com/jalan/images/pict1L/Y1/Y982201/Y982201001.jpg",
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
        <div style={{backgroundColor: "lightgray"}}>
            
                    <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
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
                                <th className="fContentBudget">Rp.9.000.000</th>
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
                                        3
                                    </Container>
                                </th>
                                <th>
                                    <Container className="fContentRoomIsi">
                                        2
                                    </Container>
                                </th>
                                <th>
                                    <Container className="fContentRoomIsi">
                                        1.000
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
                                            <Link to="/contentuser">
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
        </div>
    );
}
          


              
}
        
        

export default detailContent