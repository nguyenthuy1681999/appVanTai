import React, { Component } from 'react';
import {Link } from 'react-router-dom'

class Item_buses extends Component {
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
                <td>{item.bienXe}</td>
                <td>{item.mauXe}</td>
                <td>{item.hangSanXuat}</td>
                <td>{item.doiXe}</td>
                <td>{item.model}</td>
                <td>{item.soGhe}</td>
                <td>{item.soNamSuDung}</td>
                <td>{item.ngayBaoDuongCuoiCung}</td>
                <td>
                    <Link 
                        to={`/buses/${item.id}/edit`}
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

export default Item_buses;