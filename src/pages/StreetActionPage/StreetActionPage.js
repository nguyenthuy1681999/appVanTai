import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class dActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            diemDau:'',
            diemCuoi: '',
            doDai: '',
            doPhucTap: '', 
        }
    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            axios({
                method: 'GET',
                url: `https://5fa6d9b7085bf700163de912.mockapi.io/myapp/street/${id}`,
                data: null
            }).then(res => { 
                if(res.status === 200){
                    var data = res.data;
                    this.setState({ 
                        id: data.id,
                        diemDau:data.diemDau,
                        diemCuoi: data.diemCuoi,
                        doDai: data.doDai,
                        doPhucTap: data.doPhucTap, 
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
        var {id, diemDau, diemCuoi, doDai, doPhucTap} = this.state
        if(id){
            axios({
                method: 'PUT',
                url: `https://5fa6d9b7085bf700163de912.mockapi.io/myapp/street/${id}`,
                data: {
                    diemDau: diemDau,
                    diemCuoi: diemCuoi,
                    doDai : doDai ,
                    doPhucTap : doPhucTap,
                }
            }).then(res => {
                history.goBack(); 
            }).catch(err => {
                console.log(err);
            });
        }else{
            axios({
                method: 'POST',
                url: 'https://5fa6d9b7085bf700163de912.mockapi.io/myapp/street',
                data: {
                    diemDau: diemDau,
                    diemCuoi: diemCuoi,
                    doDai : doDai ,
                    doPhucTap : doPhucTap,
                }
            }).then(res => {
                history.goBack(); 
            }).catch(err => {
                console.log(err);
            });
        }
 
        
    }
    render() { 
        var {diemDau, diemCuoi, doDai, doPhucTap} = this.state;
        return (
            <div className="col-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Biển số</label>
                        <input 
                            onChange={this.onChange} 
                            value={diemDau} 
                            name="diemDau" 
                            type="text" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Mầu xe</label>
                        <input 
                            onChange={this.onChange} 
                            value={diemCuoi} 
                            name="diemCuoi" 
                            type="text" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Hãng sản xuất</label>
                        <input 
                            onChange={this.onChange}
                            value={doDai} 
                            name="doDai" 
                            type="number" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Đời xe</label>
                        <input 
                            onChange={this.onChange} 
                            value={doPhucTap} 
                            name="doPhucTap" 
                            type="number" 
                            className="form-control"/>
                    </div>
                    <Link to="/streetPage" className="btn btn-danger mr-3">
                        Quay lại
                    </Link>
                    <button   
                        type="submit" 
                        className="btn btn-primary">Lưu lại
                    </button>
                    
                </form>
            </div>
        )
    }

}

export default dActionPage;