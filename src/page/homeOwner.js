import React,{Component} from 'react'
import '../App.css'
import {Navbar,Image,Button,Form,FormControl,Container,Row,Col,Badge,Table  } from 'react-bootstrap';
import Header from '../component/headerOwner'

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
                <Col>
                    <br/> 
                    <h4>Incoming Transaction</h4>
                    <Table striped hover>
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>Users</th>
                            <th>Type of Rent</th>
                            <th>Bukti Transfer</th>
                            <th>Status Payment</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>{p.name}</td>
                            <td>Year</td>
                            <td>gambar</td>
                            <td><Badge variant="success">Approve</Badge></td>
                            <td><Button variant="success">Action</Button></td>
                            </tr>
                        </tbody>
                        </Table>
                    </Col>              
                </Row>
                )
                })}
            </Container>
        );
    }
}

export default booking