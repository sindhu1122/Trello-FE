import React, { Component } from 'react';
//import {Form, Button,Label,Input} from 'reactstrap';
import {Link,Switch,Route} from 'react-router-dom';
import Board from '../Board/Board';
import '../../App.css'
import './Home.css'
//import { Card } from 'antd';
import {Button, Calendar} from 'antd'
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
export default class BoardGroup extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:this.props.username,
            password:this.props.password,
            boardName:null,
            boardData:null,
            toggle:false

        }
    }
    handleNewBoard=(e)=>{
        e.preventDefault();
        if(e.target.value===""||e.target.value===null)
        {
            alert("enter a correct name");
            return;
        }
        this.setState({boardName:e.target.value});
    }
    handleSubmit=()=>{
        console.log(this.state)
        let boardData=JSON.parse(localStorage.getItem(this.props.username));
        let board = boardData.boards
        board = { ...board, [this.state.boardName]: [{ Todo: [] }, { Done: [] }] }
        boardData.boards = board
       
        this.setState({ boardData: boardData })
        localStorage.setItem(this.state.username,JSON.stringify(boardData))        
    }
    toggleHadler=()=>
    {
        this.setState({toggle:true})

    }
    togglehad=()=>
    {
        this.setState({toggle:false})

    }
    render(){
        let boardList=JSON.parse(localStorage.getItem(this.props.username));
        let arr=[]
        let arr2=[]
        let i=0;
        if(boardList){
            
            let arr1=Object.keys(boardList.boards)
            console.log(arr1)
            arr=arr1.map((item)=>{
                i++;
                return <Card justify="space-around" align="middle" className="site-card" type="inner" style={{ marginTop: 16 }} title={item}> <Link to={`/${item}`} onClick={this.toggleHadler}>{item}</Link></Card>
            
            
                
            })
            arr2=arr1.map(item=>{
                return <Route path={`/${item}`}><Board username={this.props.username} task={item}/></Route>
            })
        }
        return(
            <div>
                {!this.state.toggle?
                <div class="card">

                <h5 class="card-header info-color white-text text-center py-4">
                    <strong>Welcome {this.props.username}</strong>
                </h5>
                <div class="card-body px-lg-2">
            <div class="md-form">
                
                <input class="form-control form-control-lg" type="text" placeholder="Enter Board " onChange={this.handleNewBoard}/>
                <Button type="primary" class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.handleSubmit}> submit</Button>
                </div>
                </div>
                <div className="site-card-wrapper" justify="space-around" align="middle">

                <Card title=" My Boards"  align="middle">  
    
            {arr}
            </Card>
            </div>
            </div>
            :
        <div>
             <div class="card">

<h5 class="card-header info-color white-text text-center py-4">
    <strong>Welcome {this.props.username}</strong>
</h5>
            <button id="h1" onClick={this.togglehad} class="btn btn-outline-primary btn-sm m-0 waves-effect">back</button>
                <Switch>
                    {arr2}
                   
                </Switch>
                </div>
                </div>
                }
        </div>
        

        );
    }
}