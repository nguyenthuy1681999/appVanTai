import React, { Component } from 'react';
import {Link } from 'react-router-dom'

class Item_coach extends Component {
    onDedete = (id) => {
        if(confirm('Bạn có chắc chắn muốn xóa?')){  //eslint-disable-line
            this.props.onDedete(id);
        }
    }
    render() {
        var{item,index} = this.props;
        return (

            <tr className="text-center">
                <td>{index + 1}</td>
                <td>{item.maSo}</td>
                <td>{item.tuyen}</td>
                <td>{item.laiXe}</td>
                <td>{item.phuXe}</td>
                <td>{item.soKhach}</td>
                <td>{item.giaVe}</td>
                <td>
                    <Link 
                        to={`/coach/${item.id}/edit`}
                        className="btn btn-success mf-1 mb-1"  
                        >
                            Sửa
                    </Link>
                    <br/>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={ () => this.onDedete(item.id)}>
                            Xóa
                    </button>
                </td>
        </tr>

        )
    }
}

export default Item_coach;