import React,{Component} from 'react';
import Header from './page/headerUser'
import Content from './page/content';



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