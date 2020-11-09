import React, { Component } from 'react';
import {Link } from 'react-router-dom'

class Item_driver extends Component {
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
                <td>{item.ten}</td>
                <td>{item.cmt}</td>
                <td>{item.maSoBangLai}</td>
                <td>{item.loaiBangLai}</td>
                <td>{item.diaChi}</td>
                <td>{item.ngaySinh}</td>
                <td>{item.thamNien}</td>
                <td>
                    <Link 
                        to={`/driver/${item.id}/edit`}
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

export default Item_driver;