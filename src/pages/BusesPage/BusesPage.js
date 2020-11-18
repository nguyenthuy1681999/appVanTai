import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Item_buses from '../../components/item_buses/item_buses';
import List_buses from '../../components/list_buses/list_buses'
import axios from 'axios';

class BusesPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            buses : [],
            filter : {
                filterBienXe: '',
                filterMauXe: '',
                filterHangSanXuat: '',
                filterDoiXe: '',
                filterModel: '',
                filterSoGhe: '',
                filterSoNamSuDung:''
            }
        }
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/v1/cars/',
            data: null
        }).then(res => {
            this.setState({
                buses: res.data
            })
        }).catch(err => {
            console.log(err);
        });
    }
    onDedete = (id) => {
        var {buses} = this.state;
        axios({
            method: 'DELETE',
            url: `http://localhost:8080/api/v1/cars/${id}`,
            data: null
        }).then(res => { 
            if(res.status === 200){
                var index = this.findIndex(buses ,id);
                if (index !== -1){
                    buses.splice(index,1);
                    this.setState({
                        buses:buses
                    })
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }
    findIndex = (buses, id) => {
        var result = -1;
        buses.forEach((item, index) => {
            if(item.id === id){
                result = index;
            }
        });
        return result;
    }
    onFilter = (filterBienXe, filterMauXe, filterHangSanXuat, filterDoiXe, filterModel, filterSoGhe, filterSoNamSuDung) => {
        this.setState({
            filter : {
                filterBienXe: filterBienXe.toLowerCase(),
                filterMauXe: filterMauXe.toLowerCase(),
                filterHangSanXuat: filterHangSanXuat.toLowerCase(),
                filterDoiXe: filterDoiXe.toLowerCase(),
                filterModel : parseInt(filterModel),
                filterSoGhe : parseInt(filterSoGhe),
                filterSoNamSuDung : parseInt(filterSoNamSuDung)
            }
        });
    }

    render() {
        var {buses, filter} = this.state;
        if(filter){
            if(filter.filterBienXe){
                buses = buses.filter((item) => {
                    return item.bienXe.toLowerCase().indexOf(filter.filterBienXe) !== -1;
                })
            }
            if(filter.filterMauXe){
                buses = buses.filter((item) => {
                    return item.mauXe.toLowerCase().indexOf(filter.filterMauXe) !== -1;
                })
            }
            if(filter.filterHangSanXuat){
                buses = buses.filter((item) => {
                    return item.hangSanXuat.toLowerCase().indexOf(filter.filterHangSanXuat) !== -1;
                })
            }
            if(filter.filterDoiXe){
                buses = buses.filter((item) => {
                    return item.doiXe.toLowerCase().indexOf(filter.filterDoiXe) !== -1;
                })
            }
            if(filter.filterModel){
                buses = buses.filter((item) => {
                    return item.model === filter.filterModel;
                })
            }
            if(filter.filterSoGhe){
                buses = buses.filter((item) => {
                    return item.soGhe === filter.filterSoGhe;
                })
            }
            if(filter.filterSoNamSuDung){
                buses = buses.filter((item) => {
                    return item.soNamSuDung === filter.filterSoNamSuDung;
                })
            }
            
        }
        return (
            <div className="buses">
                <div className="container">
                    <h1 className="text-center">DANH SÁCH CÁC XE</h1>
                    <div className="row">
                        <div className="col-12">
                            <Link to="/buses/add" className="btn btn-info mb-4">
                                Thêm xe
                            </Link>
                                    
                            <List_buses onFilter={this.onFilter}>
                            {
                                buses.map((item, index) => {
                                    return <Item_buses onDedete={this.onDedete} key={index} item={item} index={index}/>
                                })
                            }
                            </List_buses>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusesPage;