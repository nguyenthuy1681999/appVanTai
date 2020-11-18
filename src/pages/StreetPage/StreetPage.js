import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Item_street from '../../components/item_street/item_street';
import List_street from '../../components/list_street/list_street'
import axios from 'axios';

class StreetPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            street : [],
            filter : {
                filterDiemDau: '',
                filterDiemCuoi: '',
                filterDoDai: '',
                filterDoPhucTap: '',
            }
        }
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/v1/routes/',
            data: null
        }).then(res => {
            this.setState({
                street: res.data
            })
        }).catch(err => {
            console.log(err);
        });
    }
    onDedete = (id) => {
        var {street} = this.state;
        axios({
            method: 'DELETE',
            url: `http://localhost:8080/api/v1/routes/${id}`,
            data: null
        }).then(res => { 
            if(res.status === 200){
                var index = this.findIndex(street ,id);
                if (index !== -1){
                    street.splice(index,1);
                    this.setState({
                        street:street
                    })
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }
    findIndex = (street, id) => {
        var result = -1;
        street.forEach((item, index) => {
            if(item.id === id){
                result = index;
            }
        });
        return result;
    }
    onFilter = (filterDiemDau, filterDiemCuoi, filterDoDai, filterDoPhucTap, filterModel, filterSoGhe, filterSoNamSuDung) => {
        this.setState({
            filter : {
                filterDiemDau: filterDiemDau.toLowerCase(),
                filterDiemCuoi: filterDiemCuoi.toLowerCase(),
                filterDoDai: parseInt(filterDoDai),
                filterDoPhucTap: parseInt(filterDoPhucTap),
            }
        });
    }

    render() {
        var {street, filter} = this.state;
        if(filter){
            if(filter.filterDiemDau){
                street = street.filter((item) => {
                    return item.diemDau.toLowerCase().indexOf(filter.filterDiemDau) !== -1;
                })
            }
            if(filter.filterDiemCuoi){
                street = street.filter((item) => {
                    return item.diemCuoi.toLowerCase().indexOf(filter.filterDiemCuoi) !== -1;
                })
            }
            if(filter.filterDoDai){
                street = street.filter((item) => {
                    return item.doDai === filter.filterDoDai;
                })
            }
            if(filter.filterDoPhucTap){
                street = street.filter((item) => {
                    return parseInt(item.doPhucTap) === filter.filterDoPhucTap;
                })
            }
            
        }
        return (
            <div className="street">
                <div className="container">
                    <h1 className="text-center">DANH SÁCH CÁC TUYẾN XE</h1>
                    <div className="row">
                        <div className="col-12">
                            <Link to="/street/add" className="btn btn-info mb-4">
                                Thêm tuyến xe
                            </Link>
                                    
                            <List_street onFilter={this.onFilter}>
                            {
                                street.map((item, index) => {
                                    return <Item_street onDedete={this.onDedete} key={index} item={item} index={index}/>
                                })
                            }
                            </List_street>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StreetPage;