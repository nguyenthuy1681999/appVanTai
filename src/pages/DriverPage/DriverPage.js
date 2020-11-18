import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Item_driver from '../../components/item_driver/item_driver';
import List_driver from '../../components/list_driver/list_driver'
import axios from 'axios';

class driverPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            driver : [],
            filter : {
                filterTen: '',
                filterCMT: '',
                filterMaSoBangLai: '',
                filterLoaiBangLai: '',
                filterDiaChi: '',
                filterThamNien: ''
            }
        }
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/v1/drivers/',
            data: null
        }).then(res => {
            this.setState({
                driver: res.data
            })
        }).catch(err => {
            console.log(err);
        });
    }
    onDedete = (id) => {
        var {driver} = this.state;
        axios({
            method: 'DELETE',
            url: `http://localhost:8080/api/v1/drivers/${id}`,
            data: null
        }).then(res => { 
            if(res.status === 200){
                var index = this.findIndex(driver ,id);
                if (index !== -1){
                    driver.splice(index,1);
                    this.setState({
                        driver:driver
                    })
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }
    findIndex = (driver, id) => {
        var result = -1;
        driver.forEach((item, index) => {
            if(item.id === id){
                result = index;
            }
        });
        return result;
    }
    onFilter = (filterTen, filterCMT, filterMaSoBangLai, filterLoaiBangLai ,filterDiaChi, filterThamNien) => {
        this.setState({
            filter : {
                filterTen: filterTen.toLowerCase(),
                filterCMT: parseInt(filterCMT),
                filterMaSoBangLai: parseInt(filterMaSoBangLai),
                filterLoaiBangLai : filterLoaiBangLai.toLowerCase(),
                filterDiaChi: filterDiaChi.toLowerCase(),
                filterThamNien : parseInt(filterThamNien)
            }
        });
        console.log(filterTen,filterMaSoBangLai ,filterThamNien)
    }

    render() {
        var {driver, filter} = this.state;
        if(filter){
            if(filter.filterTen){
                driver = driver.filter((item) => {
                    return item.ten.toLowerCase().indexOf(filter.filterTen) !== -1;
                })
            }
            if(filter.filterCMT){
                driver = driver.filter((item) => {
                    return item.cmt === filter.filterCMT;
                })
            }
            if(filter.filterMaSoBangLai){
                driver = driver.filter((item) => {
                    return item.maSoBangLai === filter.filterMaSoBangLai
                })
            }
            if(filter.filterLoaiBangLai){
                driver = driver.filter((item) => {
                    return item.loaiBangLai.toLowerCase().indexOf(filter.filterLoaiBangLai) !== -1;
                })
            }
            if(filter.filterDiaChi){
                driver = driver.filter((item) => {
                    return item.diaChi.toLowerCase().indexOf(filter.filterDiaChi) !== -1;
                })
            }
            if(filter.filterThamNien){
                driver = driver.filter((item) => {
                    return item.thamNien === filter.filterThamNien
                })
            }
        }
        return (
            <div className="driver">
                <div className="container">
                    <h1 className="text-center">DANH SÁCH CÁC LÁI XE</h1>
                    <div className="row">
                        <div className="col-12">
                            <Link to="/driver/add" className="btn btn-info mb-4">
                                Thêm lái xe
                            </Link>
                                    
                            <List_driver onFilter={this.onFilter}>
                            {
                                driver.map((item, index) => {
                                    return <Item_driver onDedete={this.onDedete} key={index} item={item} index={index}/>
                                })
                            }
                            </List_driver>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default driverPage;