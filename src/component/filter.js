import React,{ Component } from 'react';
import {FormGroup,Form,ToggleButton,ToggleButtonGroup, Button,FormControl,Row,Col,Container} from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
import '../App.css'

class filter extends Component{
    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
    render() {
        return (
            <Container>
                    <Form>
                        <FormGroup>
                            <Form.Label className="proper">Type of Rent</Form.Label><br/>
                        </FormGroup>
                        <FormGroup>
                            <ToggleButtonGroup  type="Radio" required>
                                        <ToggleButton variant="secondary" defaultChecked className="mr-2" value="Day">
                                            Day
                                        </ToggleButton>

                                    <ToggleButton variant="secondary" defaultChecked className="mr-2"  value="Month">
                                        Month
                                    </ToggleButton>

                                    <ToggleButton variant="secondary" defaultChecked className="mr-2"  value="Year">
                                        Year
                                    </ToggleButton>
                            </ToggleButtonGroup> 
                        </FormGroup>

                        <FormGroup >
                            <Form.Label className="date" style={{ fontSize: "24px"}}>Date</Form.Label>
                        </FormGroup>
                        <br/><br/>
                        <FormGroup> 
                                <Form.Control type="date" required/>
                        </FormGroup>
                        <br/>
                        
                        <FormGroup>
                            <Form.Label className="proper">Property Room</Form.Label>
                        </FormGroup>
                        <br/><br/>

                        <FormGroup>
                            <Form.Text><small className="text-muted"/>Bedroom</Form.Text>
                        </FormGroup>

                        <FormGroup>
                               <ToggleButtonGroup  type="Radio">
                                    <ToggleButton variant="secondary" defaultChecked className="mr-2" value="1">
                                    1
                                    </ToggleButton>
                                    <ToggleButton variant="secondary" defaultChecked className="mr-2"  value="2">
                                    2
                                    </ToggleButton>
                                    <ToggleButton variant="secondary" defaultChecked className="mr-2"  value="3">
                                    3
                                    </ToggleButton>
                                    <ToggleButton variant="secondary" defaultChecked className="mr-2"  value="4">
                                    4
                                    </ToggleButton>
                                    <ToggleButton variant="secondary" defaultChecked className="mr-2"  value="5">
                                    5
                                    </ToggleButton>
                                </ToggleButtonGroup> 
                        </FormGroup>

                        <FormGroup>    
                                <Form.Text><small className="text-muted"/>Bathroom</Form.Text>
                        </FormGroup>

                        <FormGroup>
                            <ToggleButtonGroup  type="Radio">
                                <ToggleButton variant="secondary" defaultChecked className="mr-2" value="1">
                                1
                                </ToggleButton>
                                <ToggleButton variant="secondary" defaultChecked className="mr-2"  value="2">
                                2
                                </ToggleButton>
                                <ToggleButton variant="secondary" defaultChecked className="mr-2"  value="3">
                                3
                                </ToggleButton>
                                <ToggleButton variant="secondary" defaultChecked className="mr-2"  value="4">
                                4
                                </ToggleButton>
                                <ToggleButton variant="secondary" defaultChecked className="mr-2"  value="5">
                                5
                                </ToggleButton>
                            </ToggleButtonGroup> 
                        </FormGroup>
                        <br/>
                        <FormGroup>
                            <Form.Label className="proper">Amenities</Form.Label>
                        </FormGroup> 
                        <br/>
                        
                        <FormGroup>
                            <Row>
                                <Col sm={8}>
                                    <Form.Label className="text-muted">Furnished</Form.Label>
                                </Col>
                                <Col sm={4}>
                                    <Form.Check type="checkbox" value="Furnished"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={8}>
                                    <Form.Label className="text-muted">Pet Allowed</Form.Label>
                                </Col>
                                <Col sm={4}>
                                    <Form.Check type="checkbox" value="Pet Allowed"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={8}>
                                    <Form.Label className="text-muted">Shared Accomodation</Form.Label>
                                </Col>
                                <Col sm={4}>
                                    <Form.Check type="checkbox" value="Shared Accomodation"/>
                                </Col>
                            </Row>

                     </FormGroup>
                         <br/>

                        <FormGroup>
                            <Form.Label className="proper">Budget</Form.Label>
                        </FormGroup>
                        <br/>
                            <Form.Text className="idr">Less than IDR</Form.Text>
                        
                        <FormGroup>
                            <FormControl type="text" label="-">
                            </FormControl>
                        </FormGroup>
                        <br/>
                        <Button variant="primary"  className="float-right">Apply</Button>
                    </Form>
            </Container>
        );
    }
}

export default filter
