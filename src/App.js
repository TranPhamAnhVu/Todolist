import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import Control from './Components/Control';
import Form from './Components/Form';
import List from './Components/List';
//import Task from './Mocks/Task'
import { remove, reject } from 'lodash'
import uuidv4 from 'uuid/v4'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            showForm: false,
            itemSelected: null //Lưu trạng thái item đã chọn để Edit                        
        };
        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    componentWillMount() {
            let items = JSON.parse(localStorage.getItem('task'));
            this.setState({
                items: items
            });

            //Save data
            localStorage.setItem("tasks", "something");
            //Get
            console.log(localStorage.getItem("tasks"));
            //Remove
            console.log(localStorage.removeItem("tasks"));

        }
        //Function handle      
    handleEdit(item) {
        this.setState({
            itemSelected: item,
            showForm: true
        });
    }
    handleSubmit(item) { //Truyền vào đối tượng         
        let kq = this.state.items;
        let idSubmit = null;

        if (item.id !== '') {
            //Cập nhật lại thông tin công việc     
            kq = reject(kq, { id: item.id }) //(Objects, {Lấy id objects})            
            idSubmit = item.id;
        } else {
            idSubmit = uuidv4()
        }
        kq.push({
            id: idSubmit,
            name: item.name,
            level: +item.level
        });
        this.setState({ //Sau khi edit/add cần cập nhật lại 
            items: kq,
            showForm: false
        });

        localStorage.setItem('task',JSON.stringify(kq));
    }
    handleDelete(id) {
        remove(this.state.items, (item) => {
            return item.id === id; //Gắn id của item cho id cần tìm
        });
        this.setState({
            item: this.state.items
        });

        localStorage.setItem('task',JSON.stringify(this.state.items));
    }
    handleToggleForm() {
        this.setState({ //Thay đổi trạng thái form 
            showForm: !this.state.showForm,
            itemSelected: null //Reset form sau khi edit
        });
    }
    closeForm() {
            this.setState({
                showForm: false
            });
        }
        //End Function handle

    render() {
        let eleForm = null;
        //showForm: True(Show) - False(Hide)        
        if (this.state.showForm) {
            eleForm = < Form
            onClickSubmit = { this.handleSubmit }
            onClickCancel = { this.closeForm }
            itemSelected = { this.state.itemSelected }
            />
        }

        return ( 
            <div className = "App" > 
            { /* TITLE : START */ } 
            <Title/>
            { /* CONTROL (SEARCH + SORT + ADD) : START */ } 
            <Control onClickAdd = { this.handleToggleForm } showForm = { this.state.showForm }/>        
            { /* FORM : START */ } { eleForm }
            { /* LIST : START */ } 
            < List items = { this.state.items }
            onClickDelete = { this.handleDelete }
            onClickEdit = { this.handleEdit }/>              
            </div>
        );
    }
}

export default App;