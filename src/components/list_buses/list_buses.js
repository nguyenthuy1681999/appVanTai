import React, { Component } from 'react';

class Buses extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterBienXe: '',
            filterMauXe: '',
            filterHangSanXuat: '',
            filterDoiXe: '',
            filterModel: '',
            filterSoGhe: '',
            filterSoNamSuDung:'',
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterBienXe' ? value : this.state.filterBienXe,
            name === 'filterMauXe' ? value : this.state.filterMauXe,
            name === 'filterHangSanXuat' ? value : this.state.filterHangSanXuat,
            name === 'filterDoiXe' ? value : this.state.filterDoiXe,
            name === 'filterModel' ? value : this.state.filterModel,
            name === 'filterSoGhe' ? value : this.state.filterSoGhe,
            name === 'filterSoNamSuDung' ? value : this.state.filterSoNamSuDung,
        )
        this.setState({
            [name]: value
        })
    }
    onClick= () => {
        this.setState({
            filterBienXe: '',
            filterMauXe: '',
            filterHangSanXuat: '',
            filterDoiXe: '',
            filterModel: '',
            filterSoGhe: '',
            filterSoNamSuDung:''
        })
        this.props.onFilter('','','','','','','')
    }

    

    render() {
        var {filterBienXe, filterMauXe, filterHangSanXuat, filterDoiXe, filterModel, filterSoGhe, filterSoNamSuDung} = this.state;
        return (
            <div className="buses">
                <div className="panel panel-primary"></div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr className="text-center">
                                <th>STT</th>
                                <th>Biển số</th>
                                <th>Mầu xe</th>
                                <th>Hãng sản xuất</th>
                                <th>Đời xe</th>
                                <th>Model</th>
                                <th>Số ghế</th>
                                <th>Số năm sử dụng</th>
                                <th>Ngày bảo dưỡng cuối cùng</th>
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
                                    name="filterBienXe" 
                                    type="text"
                                    className="form-control"
                                    value={filterBienXe}
                                    />             
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterMauXe" 
                                    type="text"
                                    className="form-control"
                                    value={filterMauXe}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterHangSanXuat" 
                                    type="text"
                                    className="form-control"
                                    value={filterHangSanXuat}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterDoiXe" 
                                    type="text"
                                    className="form-control"
                                    value={filterDoiXe}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterModel" 
                                    type="number"
                                    className="form-control"
                                    value={filterModel}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterSoGhe" 
                                    type="number"
                                    className="form-control"
                                    value={filterSoGhe}/>
                                </td>
                                <td>
                                    <input 
                                    onChange={this.onChange}
                                    name="filterSoNamSuDung" 
                                    type="number"
                                    className="form-control"
                                    value={filterSoNamSuDung}/>
                                </td>
                                <td></td>

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