import React,{Component} from "react";
import Logo from '../logo.svg';

class About extends Component{
    render(){
        return(
            <div>
                <h1>About Component</h1>
                <img src={Logo} width="500" alt="Logo" />
            </div>
        )
    }
}

export default About;