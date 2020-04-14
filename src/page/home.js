import React, { Component } from "react";
import Header from '../component/headerHome';
import Filter from '../component/filter';
import IsiContent from '../component/isiContent';
import {Row,Col,CardColumns,Card,Badge,Image,Button,Container} from 'react-bootstrap';


class home extends Component{
    render() {
        return (
            <div>
                <Header/>
                    <Row>
                        <Col xs={3}>
                            <Filter/>
                        </Col>
                        <Col xs={9} style={{backgroundColor:"lightgray"}}>
                            <IsiContent />
                        </Col>
                    </Row>
            </div>
        );
    }
}

export default home