import React, { Component } from 'react';

class Coach extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterMaSo: '',
            filterTuyen: '',
            filterLaiXe: '',
            filterPhuXe: '',
            filterSoKhach: '',
            filterGiaVe: '',
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterMaSo' ? value : this.state.filterMaSo,
            name === 'filterTuyen' ? value : this.state.filterTuyen,
            name === 'filterLaiXe' ? value : this.state.filterLaiXe,
            name === 'filterPhuXe' ? value : this.state.filterPhuXe,
            name === 'filterSoKhach' ? value : this.state.filterSoKhach,
            name === 'filterGiaVe' ? value : this.state.filterGiaVe,
        )
        this.setState({
            [name]: value
        })
    }
    onClick= () => {
        this.setState({
            filterMaSo: '',
            filterTuyen: '',
            filterLaiXe: '',
            filterPhuXe: '',
            filterSoKhach: '',
            filterGiaVe: ''
        })
        this.props.onFilter('','','','','','')
    }

    

    render() {
        var {filterMaSo, filterTuyen, filterLaiXe, filterPhuXe, filterSoKhach, filterGiaVe} = this.state;
        return (
            <div className="Coach">
                <div className="panel panel-primary"></div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr className="text-center">
                                <th>STT</th>
                                <th>Mã số</th>
                                <th>Tuyến</th>
                                <th>Lái xe</th>
                                <th>Phụ xe</th>
                                <th>Số khách</th>
                                <th>Gía vé</th>
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
                                    name="filterMaSo" 
                                    type="number"
                                    className="form-control"
                                    value={filterMaSo}
                                    />             
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterTuyen" 
                                    type="text"
                                    className="form-control"
                                    value={filterTuyen}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterLaiXe" 
                                    type="text"
                                    className="form-control"
                                    value={filterLaiXe}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterPhuXe" 
                                    type="text"
                                    className="form-control"
                                    value={filterPhuXe}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterSoKhach" 
                                    type="number"
                                    className="form-control"
                                    value={filterSoKhach}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterGiaVe" 
                                    type="number"
                                    className="form-control"
                                    value={filterGiaVe}/>
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

export default Coach;