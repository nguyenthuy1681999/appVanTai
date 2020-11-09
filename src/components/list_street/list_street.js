import React, { Component } from 'react';

class Buses extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterDiemDau: '',
            filterDiemCuoi: '',
            filterDoDai: '',
            filterDoPhucTap: '',
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterDiemDau' ? value : this.state.filterDiemDau,
            name === 'filterDiemCuoi' ? value : this.state.filterDiemCuoi,
            name === 'filterDoDai' ? value : this.state.filterDoDai,
            name === 'filterDoPhucTap' ? value : this.state.filterDoPhucTap,
        )
        this.setState({
            [name]: value
        })
    }
    onClick= () => {
        this.setState({
            filterDiemDau: '',
            filterDiemCuoi: '',
            filterDoDai: '',
            filterDoPhucTap: '',
        })
        this.props.onFilter('','','','')
    }

    

    render() {
        var {filterDiemDau, filterDiemCuoi, filterDoDai, filterDoPhucTap} = this.state;
        return (
            <div className="treet">
                <div className="panel panel-primary"></div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr className="text-center">
                                <th>STT</th>
                                <th>Điểm đầu</th>
                                <th>Điểm cuối</th>
                                <th>Độ dài</th>
                                <th>Độ phức tạp</th>
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
                                    name="filterDiemDau" 
                                    type="text"
                                    className="form-control"
                                    value={filterDiemDau}
                                    />             
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterDiemCuoi" 
                                    type="text"
                                    className="form-control"
                                    value={filterDiemCuoi}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterDoDai" 
                                    type="number"
                                    className="form-control"
                                    value={filterDoDai}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterDoPhucTap" 
                                    type="numer"
                                    className="form-control"
                                    value={filterDoPhucTap}/>
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

export default Buses;