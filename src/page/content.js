import React,{Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import IsiContent from '../page/isiContent';
import Filter from '../page/filter';

class content extends Component{
    render() {
        return (
            <div>
                <Row>
                    <Col sm={3}>
                        <Filter/>
                    </Col>
                    <Col sm={9} style={{backgroundColor:"lightgray"}}>
                        <IsiContent />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default content
