import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class CoachActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            maSo:'',
            chuyen: '',
            laiXe: '',
            phuXe: '',
            soKhach: '',
            giaVe: '',
        }
    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            axios({
                method: 'GET',
                url: `https://5fa6d9b7085bf700163de912.mockapi.io/myapp/coach/${id}`,
                data: null
            }).then(res => { 
                if(res.status === 200){
                    var data = res.data;
                    this.setState({ 
                        id: data.id,
                        maSo:data.maSo,
                        chuyen: data.chuyen,
                        laiXe: data.laiXe,
                        phuXe: data.phuXe,
                        soKhach: data.soKhach,
                        giaVe: data.giaVe
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
        var {id, maSo, chuyen, laiXe, phuXe, soKhach, giaVe} = this.state
        if(id){
            axios({
                method: 'PUT',
                url: `https://5fa6d9b7085bf700163de912.mockapi.io/myapp/coach/${id}`,
                data: {
                    maSo: maSo,
                    chuyen: chuyen,
                    laiXe : laiXe ,
                    phuXe : phuXe,
                    soKhach : soKhach,
                    giaVe : giaVe,
                }
            }).then(res => {
                history.goBack(); 
            }).catch(err => {
                console.log(err);
            });
        }else{
            axios({
                method: 'POST',
                url: 'https://5fa6d9b7085bf700163de912.mockapi.io/myapp/coach',
                data: {
                    maSo: maSo,
                    chuyen: chuyen,
                    laiXe : laiXe ,
                    phuXe : phuXe,
                    soKhach : soKhach,
                    giaVe : giaVe
                }
            }).then(res => {
                history.goBack(); 
            }).catch(err => {
                console.log(err);
            });
        }
 
        
    }
    render() { 
        var {maSo, chuyen, laiXe, phuXe, soKhach, giaVe} = this.state;
        return (
            <div className="col-6">
                <Link to="/coachPage" className="btn btn-danger mb-4 mt-4">
                    Quay lại
                </Link>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Mã số</label>
                        <input 
                            onChange={this.onChange} 
                            value={maSo} 
                            name="maSo" 
                            type="number" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Chuyến</label>
                        <input 
                            onChange={this.onChange} 
                            value={chuyen} 
                            name="chuyen" 
                            type="text" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Lái xe</label>
                        <input 
                            onChange={this.onChange}
                            value={laiXe} 
                            name="laiXe" 
                            type="text" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Phụ xe</label>
                        <input 
                            onChange={this.onChange} 
                            value={phuXe} 
                            name="phuXe" 
                            type="text" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Số Khác</label>
                        <input 
                            onChange={this.onChange} 
                            value={soKhach} 
                            name="soKhach" 
                            type="number" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Giá vé</label>
                        <input 
                            onChange={this.onChange} 
                            value={giaVe} 
                            name="giaVe" 
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

export default CoachActionPage;