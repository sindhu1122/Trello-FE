import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import { MDBInput } from 'mdbreact';
class Taskdetails extends Component{
    render()
    {
        // let data=JSON.parse(localStorage.getItem(this.props.username))
        // let array = data.boards[this.props.task]
        // let arra1 = data.boards[this.props.task].map(obj => {
        //     return Object.keys(obj)
        // })
        // console.log(arra1)
        // let index = arra1.findIndex((ele) => {
        //     return ele == this.props.ord
        // })
        // console.log(index)
        // console.log(this.props.ord)
        // let k=this.props.ord
        // console.log(array[index].k)
        // let  des= array.map(obj => {
        
        //     Object.values(obj).map(task => {
        //         return task.map((ele) => {
        //             console.log(ele)
        //             return <p>{ele.title}</p>
        //         })
        //     })
        
    //})
   // console.log(des)
        
        return(
            <div>
                <Modal size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered show={this.props.modal} onHide={this.props.taskHadler}>
              <Modal.Header closeButton>
                 <Modal.Title>{this.props.task1}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {
                      <div>
                     <label>Descriptio</label>
                     <p>{this.props.des}</p>
                     <label>Date</label>
                     <p>{this.props.da}</p>
                     </div>
                  }
                 
              </Modal.Body>
              <Modal.Footer>
                 <button variant="danger" onClick={this.props.taskHadler}>
                    Cancel
                 </button>
              </Modal.Footer>
          </Modal>
            </div>
        )
    }
}
export default Taskdetails