import React, { Component } from 'react';
import items from '../Mocks/Task';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            task_id: '',
            task_name: '',
            task_level: 0        
        };                                   
        this.handleCancel = this.handleCancel.bind(this);             
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    //LifeCircle
    componentWillMount() {
        //Trường hợp !== => Edit
        let item = this.props.itemSelected;                         
        if(item !== null){ //Dữ liệu rỗng            
           this.setState({               
            task_id: item.id,
            task_name: item.name,
            task_level: item.level             
           });
        }        
    }
    componentWillReceiveProps(nextProps){
        let item = nextProps.itemSelected;                         
        if(item !== null){ //Dữ liệu rỗng            
           this.setState({               
            task_id: item.id,
            task_name: item.name,
            task_level: item.level             
           });
        }        
    }
    //EndLifeCircle


    //Fuction handle       
    //Thay đổi ở input
    handleChange(event){        
        const sth_value = event.target.value;
        const sth_name = event.target.name;
        this.setState({
            [sth_name]: sth_value //Tìm thuộc tính name ứng với text 
        });
    }
    handleSubmit(event){
        //console.log(this.state);   
        let kq = { //Truyền đối tượng qua App.js                        
            id: this.state.task_id,
            name: this.state.task_name,
            level: this.state.task_level,
        }
        this.props.onClickSubmit(kq);
        event.preventDefault();
    }
    handleCancel() {
        this.props.onClickCancel()
    }
    //End Function handle

   
    render() {                  
        return ( 
            <div className = "row" >
                <div className = "col-md-offset-7 col-md-5" >
                    <form onSubmit = {this.handleSubmit} className = "form-inline" >

                        <div className = "form-group" >
                            <label className = "sr-only" htmlFor > label </label>   
                            <input value = {this.state.task_name} onChange = {this.handleChange} name = "task_name"  type = "text" className = "form-control" placeholder = "Task Name" />
                        </div>   

                        <div className = "form-group" >
                            <label className = "sr-only" htmlFor > label </label>   
                            <select value = {this.state.task_level} onChange = {this.handleChange} name = "task_level" className = "form-control" required = "required" > Small 
                                <option value = { 0 } > Small </option>   
                                <option value = { 1 } > Medium </option>   
                                <option value = { 2 } > High </option>                 
                            </select>   
                        </div>   
                        <button type = "submit" className = "btn btn-primary" > Submit </button>              
                        <button onClick = { this.handleCancel } type = "button" className = "btn btn-default" > Cancel </button>                
                    </form>   
                </div>   
            </div>            
        );
    }
}

export default Form;