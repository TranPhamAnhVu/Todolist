import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [

            ]
        };
    }
    render() {
        return ( <
            div className = "page-header" >
            <
            h1 > ToDo List < /h1>     <
            /div>
        );
    }
}

export default Title;