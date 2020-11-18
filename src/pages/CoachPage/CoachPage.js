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
                filterTuyen: '',
                filterLaXe: '',
                filterPhuXe: '',
                filterSoKhach: '',
                filterGiaVe: ''
            }
        }
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/v1/trips/',
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
            url: `http://localhost:8080/api/v1/trips/${id}`,
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
    onFilter = (filterMaSo, filterTuyen, filterLaiXe, filterPhuXe, filterSoKhach, filterGiaVe) => {
        this.setState({
            filter : {
                filterMaSo: parseInt(filterMaSo),
                filterChuyen: filterTuyen.toLowerCase(),
                filterDiemDau: filterLaiXe.toLowerCase(),
                filterDiemCuoi: filterPhuXe.toLowerCase(),
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
            if(filter.filterTuyen){
                coach = coach.filter((item) => {
                    return item.chuyen.toLowerCase().indexOf(filter.filterTuyen) !== -1;
                })
            }
            if(filter.filterLaiXe){
                coach = coach.filter((item) => {
                    return item.laiXe.toLowerCase().indexOf(filter.filterLaiXe) !== -1;
                })
            }
            if(filter.filterPhuXe){
                coach = coach.filter((item) => {
                    return item.phuXe.toLowerCase().indexOf(filter.filterPhuXe) !== -1;
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