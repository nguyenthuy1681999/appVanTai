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
                url: `http://localhost:8080/api/v1/routes/${id}`,
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
                url: `http://localhost:8080/api/v1/routes/`,
                data: {
                    id,
                    diemDau,
                    diemCuoi,
                    doDai,
                    doPhucTap
                }
            }).then(res => {
                history.goBack(); 
            }).catch(err => {
                console.log(err);
            });
        }else{
            axios({
                method: 'POST',
                url: `http://localhost:8080/api/v1/routes/${id}`,
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
                <Link to="/streetPage" className="btn btn-danger mb-4 mt-4">
                    Quay lại
                </Link>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Điểm đầu</label>
                        <input 
                            onChange={this.onChange} 
                            value={diemDau} 
                            name="diemDau" 
                            type="text" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Điểm cuối</label>
                        <input 
                            onChange={this.onChange} 
                            value={diemCuoi} 
                            name="diemCuoi" 
                            type="text" 
                            className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Độ dài</label>
                        <input 
                            onChange={this.onChange}
                            value={doDai} 
                            name="doDai" 
                            type="number" 
                            className="form-control"/>
                    </div>

                    <div class="form-group">
                    <label>Độ phức tạp</label>
                        <select id="inputState" 
                        class="form-control" 
                        onChange={this.onChange} 
                        value={doPhucTap} 
                        name="doPhucTap" 
                        type="number" >
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
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

export default dActionPage;