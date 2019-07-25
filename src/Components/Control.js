import React, { Component } from 'react';

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };        
        this.handleAdd = this.handleAdd.bind(this);
    }

    //Fuction handle
    handleAdd(){
        this.props.onClickAdd();
    }
    //End Function handle
        
    render() {        
        let eleButton = <button onClick = {this.handleAdd} type = "button"className = "btn btn-info btn-block" > Add Task </button> 
        if(this.props.showForm === true){
            eleButton = <button onClick = {this.handleAdd} type = "button"className = "btn btn-default btn-block" > Close Form </button> 
        }

        return ( 
            <div className = "row" > 
                <div className = "col-xs-5 col-sm-5 col-md-5 col-lg-5" >
                    {eleButton}            
                </div> 
            </div>         
        );
    }
}

export default Control;