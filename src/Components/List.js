import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const items = this.props.items;     
        const eleItem = items.map((item,index)=>{
            return( <Item 
                key = { index }
                item = { item }
                index = { index }
                onClickDelete = { this.props.onClickDelete }                
                onClickEdit = {this.props.onClickEdit}                        
            /> 
            );
        });

        return ( 
            <div className = "panel panel-success" >
                <table className = "table table-hover " >
                    <thead >
                        <tr>
                            <th style = {{ width: '10%' }}className = "text-center" > # </th>  
                            <th > Task </th>  
                            <th style = {{ width: '20%' }} className = "text-center" > Level </th>  
                            <th style = {{ width: '20%' }} > Action </th>  
                        </tr>  
                    </thead>  
                    <tbody > 
                        { eleItem } 
                    </tbody>  
                </table>  
            </div>
        );
    }
}

export default List;