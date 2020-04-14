import React,{Component} from 'react';
import Header from '../component/headerUser';
import Content from '../component/content';



class homeUser extends Component{
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default homeUser