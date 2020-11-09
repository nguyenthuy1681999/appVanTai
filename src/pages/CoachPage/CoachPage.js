import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Item_coach from '../../components/item_coach/item_coach';
import List_coach from '../../components/list_coach/list_coach'
import axios from 'axios';

class CoachPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            coach : [],
            filter : {
                filterMaSo: '',
                filterChuyen: '',
                filterDiemDau: '',
                filterDiemCuoi: '',
                filterSoKhach: '',
                filterGiaVe: ''
            }
        }
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'https://5fa6d9b7085bf700163de912.mockapi.io/myapp/coach',
            data: null
        }).then(res => {
            this.setState({
                coach: res.data
            })
        }).catch(err => {
            console.log(err);
        });
    }
    onDedete = (id) => {
        var {coach} = this.state;
        axios({
            method: 'DELETE',
            url: `https://5fa6d9b7085bf700163de912.mockapi.io/myapp/coach/${id}`,
            data: null
        }).then(res => { 
            if(res.status === 200){
                var index = this.findIndex(coach ,id);
                if (index !== -1){
                    coach.splice(index,1);
                    this.setState({
                        coach:coach
                    })
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }
    findIndex = (coach, id) => {
        var result = -1;
        coach.forEach((item, index) => {
            if(item.id === id){
                result = index;
            }
        });
        return result;
    }
    onFilter = (filterMaSo, filterChuyen, filterDiemDau, filterDiemCuoi, filterSoKhach, filterGiaVe) => {
        this.setState({
            filter : {
                filterMaSo: parseInt(filterMaSo),
                filterChuyen: filterChuyen.toLowerCase(),
                filterDiemDau: filterDiemDau.toLowerCase(),
                filterDiemCuoi: filterDiemCuoi.toLowerCase(),
                filterSoKhach : parseInt(filterSoKhach),
                filterGiaVe : parseInt(filterGiaVe),
            }
        });
    }

    render() {
        var {coach, filter} = this.state;
        if(filter){
            if(filter.filterMaSo){
                coach = coach.filter((item) => {
                    return item.maSo === filter.filterMaSo;
                })
            }
            if(filter.filterChuyen){
                coach = coach.filter((item) => {
                    return item.tuyen.toLowerCase().indexOf(filter.filterChuyen) !== -1;
                })
            }
            if(filter.filterDiemDau){
                coach = coach.filter((item) => {
                    return item.laiXe.toLowerCase().indexOf(filter.filterDiemDau) !== -1;
                })
            }
            if(filter.filterDiemCuoi){
                coach = coach.filter((item) => {
                    return item.phuXe.toLowerCase().indexOf(filter.filterDiemCuoi) !== -1;
                })
            }
            if(filter.filterSoKhach){
                coach = coach.filter((item) => {
                    return item.soKhach === filter.filterSoKhach;
                })
            }
            if(filter.filterGiaVe){
                coach = coach.filter((item) => {
                    return item.giaVe === filter.filterGiaVe;
                })
            }
        }
        return (
            <div className="coach">
                <div className="container">
                    <h1 className="text-center">DANH SÁCH CÁC CHUYẾN XE</h1>
                    <div className="row">
                        <div className="col-12">
                            <Link to="/coach/add" className="btn btn-info mb-4">
                                Thêm chuyến xe
                            </Link>
                                    
                            <List_coach onFilter={this.onFilter}>
                            {
                                coach.map((item, index) => {
                                    return <Item_coach onDedete={this.onDedete} key={index} item={item} index={index}/>
                                })
                            }
                            </List_coach>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoachPage;