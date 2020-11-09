import React, { Component } from 'react';

class Driver extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterTen: '',
            filterCMT: '',
            filterMaSoBangLai: '',
            filterLoaiBangLai: '',
            filterDiaChi: '',
            filterThamNien: '',
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterTen' ? value : this.state.filterTen,
            name === 'filterCMT' ? value : this.state.filterCMT,
            name === 'filterMaSoBangLai' ? value : this.state.filterMaSoBangLai,
            name === 'filterLoaiBangLai' ? value : this.state.filterLoaiBangLai,
            name === 'filterDiaChi' ? value : this.state.filterDiaChi,
            name === 'filterThamNien' ? value : this.state.filterThamNien,
        )
        this.setState({
            [name]: value
        })
    }
    onClick= () => {
        this.setState({
            filterTen: '',
            filterCMT: '',
            filterMaSoBangLai: '',
            filterLoaiBangLai: '',
            filterDiaChi: '',
            filterThamNien: ''
        })
        this.props.onFilter('','','','','','','')
    }

    

    render() {
        var {filterTen, filterCMT, filterMaSoBangLai,filterLoaiBangLai, filterDiaChi, filterThamNien} = this.state;
        return (
            <div className="Driver">
                <div className="panel panel-primary"></div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr className="text-center">
                                <th>STT</th>
                                <th>Tên</th>
                                <th>CMT</th>
                                <th>Mã số bằng lái</th>
                                <th>Loại bằng lái</th>
                                <th>Địa chỉ</th>
                                <th>Ngày sinh</th>
                                <th>Thâm niên</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                    </svg>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterTen" 
                                    type="text"
                                    className="form-control"
                                    value={filterTen}
                                    />             
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterCMT" 
                                    type="number"
                                    className="form-control"
                                    value={filterCMT}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterMaSoBangLai" 
                                    type="number"
                                    className="form-control"
                                    value={filterMaSoBangLai}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterLoaiBangLai" 
                                    type="text"
                                    className="form-control"
                                    value={filterLoaiBangLai}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterDiaChi" 
                                    type="text"
                                    className="form-control"
                                    value={filterDiaChi}/>
                                </td>
                                <td></td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterThamNien" 
                                    type="number"
                                    className="form-control"
                                    value={filterThamNien}/>
                                </td>
                                <td>
                                    <button 
                                        onClick={this.onClick}
                                        type="button" 
                                        className="btn btn-danger">
                                            Xóa điều kiện 
                                    </button>  
                                </td>
                                
                                
                            </tr>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>  
            </div>
        )
    }
}

export default Driver;