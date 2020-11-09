import React, { Component } from 'react';
import {Link } from 'react-router-dom'

class Item_street extends Component {
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
                <td>{item.diemDau}</td>
                <td>{item.diemCuoi}</td>
                <td>{item.doDai}</td>
                <td>{item.doPhucTap}</td>
                <td>
                    <Link 
                        to={`/street/${item.id}/edit`}
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

export default Item_street;