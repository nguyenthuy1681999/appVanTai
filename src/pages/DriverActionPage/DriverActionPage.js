import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class DriverActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            ten:'',
            cmt: '',
            maSoBangLai: '',
            loaiBangLai: '',
            diaChi: '',
            ngaySinh: '',
            thamNien: '', 
        }
    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            axios({
                method: 'GET',
                url: `http://localhost:8080/api/v1/drivers/${id}`,
                data: null
            }).then(res => { 
                if(res.status === 200){
                    var data = res.data;
                    this.setState({ 
                        id: data.id,
                        ten:data.ten,
                        cmt: data.cmt,
                        maSoBangLai: data.maSoBangLai,
                        loaiBangLai: data.loaiBangLai,
                        diaChi: data.diaChi,
                        ngaySinh: data.ngaySinh,
                        thamNien: data.thamNien, 
                    })
                }
            }).catch(err => {
                console.log(err);
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSave = (e) => {
        e.preventDefault();
        var {history} = this.props;
        var {id, ten, cmt, maSoBangLai,loaiBangLai, diaChi, ngaySinh, thamNien} = this.state
        if(id){
            axios({
                method: 'PUT',
                url: `http://localhost:8080/api/v1/drivers/`,
                data: {
                    id,
                    ten,
                    cmt,
                    maSoBangLai,
                    loaiBangLai,
                    diaChi,
                    ngaySinh,
                    thamNien,
                }
            }).then(res => {
                history.goBack(); 
            }).catch(err => {
                console.log(err);
            });
        }else{
            axios({
                method: 'POST',
                url:`http://localhost:8080/api/v1/drivers/${id}`,
                data: {
                    ten: ten,
                    cmt: cmt,
                    maSoBangLai : maSoBangLai ,
                    loaiBangLai : loaiBangLai,
                    diaChi : diaChi,
                    ngaySinh : ngaySinh,
                    thamNien : thamNien
                }
            }).then(res => {
                history.goBack(); 
            }).catch(err => {
                console.log(err);
            });
        }
 
        
    }
    render() { 
        var {ten, cmt, maSoBangLai, loaiBangLai, diaChi, ngaySinh, thamNien} = this.state;
        return (
            <div className="col-6">
                <Link to="/driverPage" className="btn btn-danger mb-4 mt-4">
                    Quay lại
                </Link>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên</label>
                        <input 
                            onChange={this.onChange} 
                            value={ten} 
                            name="ten" 
                            type="text" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>CMT</label>
                        <input 
                            onChange={this.onChange} 
                            value={cmt} 
                            name="cmt" 
                            type="number" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Mã số bằng lái</label>
                        <input 
                            onChange={this.onChange}
                            value={maSoBangLai} 
                            name="maSoBangLai" 
                            type="number" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Loại bằng lái</label>
                        <input 
                            onChange={this.onChange}
                            value={loaiBangLai} 
                            name="loaiBangLai" 
                            type="text" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Địa chỉ</label>
                        <input 
                            onChange={this.onChange} 
                            value={diaChi} 
                            name="diaChi" 
                            type="text" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Ngày sinh</label>
                        <input 
                            onChange={this.onChange} 
                            value={ngaySinh} 
                            name="ngaySinh" 
                            type="date" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Thâm niên</label>
                        <input 
                            onChange={this.onChange} 
                            value={thamNien} 
                            name="thamNien" 
                            type="number" 
                            className="form-control"/>
                    </div>
                    <button   
                        type="submit" 
                        className="btn btn-primary">Lưu lại
                    </button>
                    
                </form>
            </div>
        )
    }

}

export default DriverActionPage;