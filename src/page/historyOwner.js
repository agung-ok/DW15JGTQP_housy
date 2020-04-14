import React,{Component} from 'react'
import Icon from './image/icon.png'
import '../App.css'
import {Navbar,Card,Image,Button,Form,FormControl,Container,Row,Col,Badge,Table  } from 'react-bootstrap';
import  Header from '../component/headerOwner'


class booking extends Component{
    render() {
        return (
            <div>
                <Header/>
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
                     "gender":"Pria",
                    "nPhone":"085727306291",
                    "address":"Jalan Elang IV Perum Permata Bintaro Residence,Pondok Aren,Tangerang Selatan"
                }
            ]
        }
    };
    render() { 
        return (
            <div style={{backgroundColor: "lightgray"}}>
            {this.state.profile.map((p)=>{
                return(         
                <Col md={{ span: 8, offset: 2 }}>
                    <br/>  
                    <Card>                  
                        <table >
                            <thead>
                            <tr>
                                <th><Image src={Icon}></Image></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th className="fBooking">INVOICE</th>
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
                                src="https://id.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"/>
                                </td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td ></td>
                                <th >Check-out</th>
                                <th >Type of Rent</th>
                                <td>TCK0101</td>
                            </tr>
                            <tr>
                                <td><Badge variant="success">Approve</Badge></td>
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
                            <th className="text-success">Total : Rp.3.000.000</th>
                            </tr>
                        </tbody>
                        </Table>
                        </Card>
                    </Col> 
                )
                })}
            </div>
        );
    }
}

export default booking