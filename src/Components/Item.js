import React, { Component } from 'react';
import items from '../Mocks/Task';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    //Fuction handle 
    handleEdit(item) {
        this.props.onClickEdit(item);
    }
    handleDelete(id) {
        this.props.onClickDelete(id);
    }
    SetEleLevel(level) {
        let eleLevel = < span className="label label-default" > Small </span>;
        if (level === 1) {
            eleLevel = < span className="label label-info" > Mediun </span>;
        } else if (level === 2) {
            eleLevel = < span className="label label-danger" > High </span>;
        }
        return eleLevel;
    }

    //End Fuction handle
    render() {
        const item = this.props.item;
        const index = this.props.index;

        return (
            <tr >
                <td className="text-center" > {index + 1} </td>
                <td > {item.name} </td>
                <td className="text-center" > {this.SetEleLevel(item.level)} </td>
                <td>
                    <button onClick={() => this.handleEdit(item)} type="button" className="btn btn-warning" > Edit </button>
                    <button onClick={() => this.handleDelete(item.id)} type="button" className="btn btn-danger" > Delete </button>
                </td >
            </tr>
        );
    }
}

export default Item;