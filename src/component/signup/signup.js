import React from 'react'
import { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard,MDBIcon,
    MDBCardHeader, MDBCardBody } from 'mdbreact';
    import Home from '../Home/Home'
import Bar from '../nav/nav'
class Signup extends Component
{
    log=false
    com=true
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            // today:[{
            //     date:[],tasks:[],endTime:[],dur:[],
            // startTime:[]}],
            submit:false
        }
        this.HandleChange = this.HandleChange.bind(this);
        this.HandlePassword = this.HandlePassword.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.HandleLog=this.HandleLog.bind(this);
      } 
      HandleSubmit(){
        
        if(this.state.username=="" || this.state.password=="")
    {
        alert("Enter Credentials")
        this.setState({submit:false})
        //this.log=!this.log
        this.com=false
    }
    

else if(!localStorage.getItem(this.state.username) && this.com==true)
{
    const obj = {
        username: this.state.username,
        password: this.state.password,
        boards: []
    }
    localStorage.setItem(this.state.username,JSON.stringify(obj))
}

      }
      HandleLog()
      {
          this.setState({submit:true})
        if(this.state.username=="" || this.state.password=="")
        {
            alert("Enter Credentials")
            this.setState({submit:false})
            //this.log=!this.log
            this.com=false
        }
        else{
            let user=JSON.parse(localStorage.getItem(this.state.username))
            if(user)
            {
                if(this.state.password!==user.password)
                {
                        alert("Wrong Password!Please give correct credentials")
                        this.setState({submit:false})
                }
                else{
                    this.log=!this.log
                }
            }
        else{
            alert("user ot exist")
            this.setState({submit:false})

        }

        }
        
            this.setState({username:this.state.username,password:this.state.password})
        

      }
      HandleChange(event)
      {
          this.setState({username:event.target.value})
      }
      HandlePassword(event)
      {
          this.setState({password:event.target.value})
      }
      handleLogout = (e) => {
         
          console.log(this.com)
          //this.log=!this.log;
          this.setState({
          username:'',
          password:'',
          submit:false
          })
          
          console.log(this.state)
          this.com=!this.com
          console.log(this.com)
          
      }
      render()
      {
    return(
        <div>
            {this.state.submit?<Home username={this.state.username} password={this.state.password}/>
            :
            <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                  <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
                    <form>
            {/* <h1 className={this.log?"hide":"show"}>SignIn</h1> */}
            {/* <div className='show'> <button className={this.log?"show":"hide"} onClick={()=>{this.log=!this.log;this.setState({username:this.state.username,submit:false})}}>Signout</button></div> */}
             <div className={this.log?"hide":"show"}>
             
                {/* <i class="fas fa-user prefix"></i> */}
                <MDBInput class="form-control form-control-lg" id="ip1" type="text" label="username" onChange={(event)=>this.HandleChange(event)}/><br></br>
            </div>
            
                {/* <i class="fas fa-user prefix"></i> */}
            <MDBInput class="form-control form-control-lg" id="ip2" type="password" label="password" onChange={(event)=>this.HandlePassword(event)}/><br></br>
            <MDBBtn class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.HandleSubmit}>signup</MDBBtn>
            <MDBBtn class="btn btn-outline-primary btn-sm m-0 waves-effect" onClick={this.HandleLog}>SignIn</MDBBtn>
            
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
            }
        </div>
            
            
        
    )
}
}
export default Signup;