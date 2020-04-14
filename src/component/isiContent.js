import React,{ Component } from 'react';
import '../App.css'
import {Image,Card,Button,CardColumns,Badge,Container,Table,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'


class isiContent extends Component{
    constructor(){
        super()
        this.state = {
            tag:"Furnished",
            address:"Tangerang Selatan, Podok Aren",
            content:[{
            "id" : 1,
            "url" : "/content1",
            "image" :"https://origin.pegipegi.com/jalan/images/pict1L/Y1/Y982201/Y982201001.jpg",
            "facility":"3 Beds, 2 Baths, 1.800 sqft",
            "budget":"Rp.9.000.000 / Year"
            },
            {
            "id" : 2,
            "url" : "/content2",
            "image" :"https://q-cf.bstatic.com/images/hotel/max1280x900/130/130026960.jpg",
            "facility":"1 Beds, 1 Baths, 800 sqft",
            "budget":"Rp.2.500.000 / Year"
            },
            {
            "id" : 3,
            "url" : "/content3",
            "image" :"https://2.bp.blogspot.com/-vRldIeidXoQ/XNCQWfmzg2I/AAAAAAAAPJo/96y3ChF73rgnVYKZn7sU7MygUByeuTf5QCLcBGAs/s1600/Villa%2BSky%2BTaman%2Bsafari_00017.jpg",
            "facility":"2 Beds, 1 Baths, 1.200 sqft",
            "budget":"Rp.5.000.000 / Year"
            },
            {
            "id": 4,
            "url" : "/content4",
            "image" :"https://imganuncios.mitula.net/villa_syariah_murah_vew_bagus_dekat_dengan_gunung_salak_kawasan_wisata_sejuk_di_bogor_barat_7070070526999999254.jpg",
            "facility":"4 Beds, 3 Baths, 2.200 sqft",
            "budget":"Rp.13.000.000 / Year"
            },
            {
            "id": 5,
            "url" : "/content5",
            "image" :"https://www.sewa-villa.com/images1/1052_5.jpg",
            "facility":"1 Beds, 1 Baths, 870 sqft",
            "budget":"Rp.3.000.000 / Year"
            },
            {
            "id": 6,
            "url" : "/content6",
            "image" :"https://www.sewa-villa.com/images1/175_1.jpg",
            "facility":"2 Beds, 2 Baths, 1.900 sqft",
            "budget":"Rp.6.000.000 / Year"
            }],
        }

    }
    render() {
        const Tag = this.state.tag
        const Address = this.state.address
        return (
            <div>
                <Row>
                        {this.state.content.map((c,i)=>{
                        return( 
                            <div key={i}>
                                <Link to={c.url}>
                                <Col md={{ span: 2, offset: 2 }}>                                  
                                    
                                    <Table> 
                                    <Card>

                                        <Row>
                                            <Col>
                                                <Badge variant="light">{Tag}</Badge>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Image variant="top" src={c.image} style={{width: "290px",height: "160px"}}></Image>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="fBudget">
                                                    {c.budget}
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="fFacility">
                                                    {c.facility}
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="text-muted fAddress"> {Address}
                                                </p>
                                            </Col>
                                        </Row>
                                        </Card>
                                    </Table>
                                </Col> 
                             </Link>
                            </div>
                            )
                        })}
                </Row>
            </div>
        );
    }
}

export default isiContent
