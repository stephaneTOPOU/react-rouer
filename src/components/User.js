import React, { Component } from "react";


class User extends Component {
    
    state = {
        name: null
    }

    componentDidMount() {
        let name = this.props.match.params.name;
        this.setState({
            name: name
        });
    }

    render() {
        return (
            <div>
                <h3>User Component</h3>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default User;