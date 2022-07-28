import React,{Component} from "react";
import Coloured from "./hoc/coloured";

class Contact extends Component{
    render(){
        return(
            <div>
                <h1>Contact Component</h1>
                <img src={process.env.PUBLIC_URL + "/logo192.png"} width="192" alt="logo" />
            </div>
        )
    }
}

export default Coloured(Contact);