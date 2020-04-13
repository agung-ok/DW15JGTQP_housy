import React,{ Component } from 'react';
import {FormGroup,Form,ToggleButton,ToggleButtonGroup, Button,FormControl} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
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
            <div>
                    <Form>
                        <FormGroup>
                            <Form.Label className="proper">Type of Rent</Form.Label>
                        </FormGroup>
                        <br/><br/>
                        <FormGroup>
                            <ToggleButtonGroup  type="Radio">
                                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2" value="Day">
                                Day
                                </ToggleButton>
                                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="Month">
                                Month
                                </ToggleButton>
                                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="Year">
                                Year
                                </ToggleButton>
                            </ToggleButtonGroup> 
                        </FormGroup>

                        <FormGroup >
                            <Form.Label className="date" style={{ fontSize: "24px"}}>Date</Form.Label>
                        </FormGroup>
                        <br/><br/>
                        <FormGroup>                           
                                 <DatePicker 
                                selected={this.state.startDate}
                                onChange={this.handleChange} 
                                dateFormat="dd MMMM yyyy"
                                className="date"
                            />
                        </FormGroup>
                        <br/><br/>
                        
                        <FormGroup>
                            <Form.Label className="proper">Property Room</Form.Label>
                        </FormGroup>
                        <br/><br/>

                        <FormGroup>
                            <Form.Text><small className="text-muted"/>Bedroom</Form.Text>
                        </FormGroup>

                        <FormGroup>
                               <ToggleButtonGroup  type="Radio">
                                    <ToggleButton variant="outline-secondary" defaultChecked className="mr-2" value="1">
                                    1
                                    </ToggleButton>
                                    <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="2">
                                    2
                                    </ToggleButton>
                                    <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="3">
                                    3
                                    </ToggleButton>
                                    <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="4">
                                    4
                                    </ToggleButton>
                                    <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="5">
                                    5
                                    </ToggleButton>
                                </ToggleButtonGroup> 
                        </FormGroup>

                        <FormGroup>    
                                <Form.Text><small className="text-muted"/>Bathroom</Form.Text>
                        </FormGroup>

                        <FormGroup>
                            <ToggleButtonGroup  type="Radio">
                                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2" value="1">
                                1
                                </ToggleButton>
                                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="2">
                                2
                                </ToggleButton>
                                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="3">
                                3
                                </ToggleButton>
                                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="4">
                                4
                                </ToggleButton>
                                <ToggleButton variant="outline-secondary" defaultChecked className="mr-2"  value="5">
                                5
                                </ToggleButton>
                            </ToggleButtonGroup> 
                        </FormGroup>

                            <Form.Label className="proper">Amenities</Form.Label>
                        <br/><br/>                           

                              <Form.Check type="checkbox" className="text-muted" label=" Furnished"/>
                              <Form.Check type="checkbox" className="text-muted" label=" Pet Allowed"/>
                              <Form.Check type="checkbox" className="text-muted" label=" Shared Accomodation"/>
       
                         <br/>

                        <FormGroup>
                            <Form.Label className="proper">Budget</Form.Label>
                        </FormGroup>
                        <br/>
                            <Form.Text className="idr">Less than IDR</Form.Text>
                        
                        <FormGroup>
                            <FormControl as="select" >
                                <option>Budget</option>
                                <option value="300000">3.000.000</option>
                                <option value="500000">5.000.000</option>
                                <option value="800000">8.000.000</option>
                            </FormControl>
                        </FormGroup>
                        <Button variant="success">Apply</Button>
                    </Form>
            </div>
        );
    }
}

export default filter
