import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BusesActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            bienXe: '',
            mauXe: '',
            hangSanXuat: '',
            doiXe: '',
            model: '',
            soGhe: '',
            soNamSuDung: '',
            ngayBaoDuongCuoiCung: '',
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            axios({
                method: 'GET',
                url: `http://localhost:8080/api/v1/cars/${id}`,
                data: null
            }).then(res => {
                if (res.status === 200) {
                    var data = res.data;
                    this.setState({
                        id: data.id,
                        bienXe: data.bienXe,
                        mauXe: data.mauXe,
                        hangSanXuat: data.hangSanXuat,
                        doiXe: data.doiXe,
                        model: data.model,
                        soGhe: data.soGhe,
                        soNamSuDung: data.soNamSuDung,
                        ngayBaoDuongCuoiCung: data.ngayBaoDuongCuoiCung,
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
        var { history } = this.props;
        var { id, bienXe, mauXe, hangSanXuat, doiXe, model, soGhe, soNamSuDung, ngayBaoDuongCuoiCung } = this.state
        if (id) {
            axios({
                method: 'PUT',
                url: `http://localhost:8080/api/v1/cars/`,
                data: {
                    id,
                    bienXe,
                    mauXe,
                    hangSanXuat,
                    doiXe,
                    model,
                    soGhe,
                    soNamSuDung,
                    ngayBaoDuongCuoiCung
                },
            }).then(res => {
                history.goBack();
            }).catch(err => {            
                console.log(err);
            });
        } else {
            axios({
                method: 'POST',
                url: `http://localhost:8080/api/v1/cars/${id}`,
                data: {
                    bienXe: bienXe,
                    mauXe: mauXe,
                    hangSanXuat: hangSanXuat,
                    doiXe: doiXe,
                    model: model,
                    soGhe: soGhe,
                    soNamSuDung: soNamSuDung,
                    ngayBaoDuongCuoiCung: ngayBaoDuongCuoiCung
                }
            }).then(res => {
                history.goBack();
            }).catch(err => {
                console.log(err);
            });
        }


    }
    render() {
        var { bienXe, mauXe, hangSanXuat, doiXe, model, soGhe, soNamSuDung, ngayBaoDuongCuoiCung } = this.state;
        return (
            <div className="col-6">
                <Link to="/busesPage" className="btn btn-danger mb-4 mt-4">
                    Quay lại
                </Link>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Biển số</label>
                        <input
                            onChange={this.onChange}
                            value={bienXe}
                            name="bienXe"
                            type="text"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Màu xe</label>
                        <input
                            onChange={this.onChange}
                            value={mauXe}
                            name="mauXe"
                            type="text"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Hãng sản xuất</label>
                        <input
                            onChange={this.onChange}
                            value={hangSanXuat}
                            name="hangSanXuat"
                            type="text"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Đời xe</label>
                        <input
                            onChange={this.onChange}
                            value={doiXe}
                            name="doiXe"
                            type="text"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Model</label>
                        <input
                            onChange={this.onChange}
                            value={model}
                            name="model"
                            type="number"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Số ghế</label>
                        <input
                            onChange={this.onChange}
                            value={soGhe}
                            name="soGhe"
                            type="number"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Số năm sử dụng</label>
                        <input
                            onChange={this.onChange}
                            value={soNamSuDung}
                            name="soNamSuDung"
                            type="number"
                            className="form-control" />
                    </div>
                    <div></div>
                    <div className="form-group">
                        <label>Ngày bảo dưỡng cuối cùng</label>
                        <input
                            onChange={this.onChange}
                            name="ngayBaoDuongCuoiCung"
                            value={ngayBaoDuongCuoiCung}
                            type="date"
                            className="form-control" />
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

export default BusesActionPage;