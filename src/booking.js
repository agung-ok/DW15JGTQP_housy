import React,{Component} from 'react'
import Icon from './image/icon.png'
import './App.css'
import {Card,Image,Button,Modal,Container,Row,Col,Badge,Table  } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Header from './page/headerUser'

class booking extends Component{
    render() {
        return (
            <div style={{backgroundColor: "White"}}>
                <Header></Header>
                <Content></Content>
            </div>
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
                    "listas":"Tenant",
                    "gender":"Pria",
                    "nPhone":"085727306291",
                    "address":"Jalan Elang IV Perum Permata Bintaro, Tangerang Selatan"
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
                <Col xs={9}>
                    <br/>  
                    <Card style={{width:"width: 1035px"}}>                  
                        <table >
                        <thead>
                            <tr>
                                <th><Image src={Icon}></Image></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th className="fBooking">Booking</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th >House Astina</th>
                                <th></th>
                                <th >Check-in</th>
                                <th >Amenties</th>
                                <th className="fBookingTgl">Saturday, 30 March 2020</th>
                            </tr>
                            <tr>
                                <td >{p.address}</td>
                                <td></td>
                                <td className="fTipis">30 March 2020</td>
                                <td className="fTipis">Furnished</td>
                                <td> <Image style={{width:"140px",height:"120px"}} 
                                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/ReceiptSwiss.jpg"/>
                                </td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <th >Check-out</th>
                                <th >Type of Rent</th>
                                <td className="fUpload">upload payment proof</td>
                            </tr>
                            <tr>
                                <td><Badge variant="danger">Waiting payment</Badge></td>
                                <td ></td>
                                <td className="fTipis">30 March 2021</td>
                                <td className="fTipis">Year</td>
                                <td ></td>
                            </tr>
                            </tbody>
                        </table>
                        <Table >
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>Full Name</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>{p.name}</td>
                            <td>{p.gender}</td>
                            <td>{p.nPhone}</td>
                            <th>Long time rent : 1 Year</th>
                            </tr>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th className="text-danger">Total : Rp.3.000.000</th>
                            </tr>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th>
                                <Button onClick={()=>this.setState({showInModal:true,showUpModal:false})}
                                variant="primary" style={{width: "213px"}}>PAY</Button>
                            </th>
                            <Modal show={this.state.showInModal} onHide={()=>this.setState({showInModal:false})}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal title</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam Untuk melihat pesanan 
                                <Link to="bookingWait"> Klik disini </Link>
                                 Terimakasih</p>

                            </Modal.Body>
                            </Modal>
                            </tr>
                        </tbody>
                        </Table>
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

export default booking