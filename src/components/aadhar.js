import React from 'react';

//import css
import './aadhar.css'
 
//import Modal
import { Button,Modal,} from 'react-bootstrap';

//import component
import Forms from './forms'
import Agreement from './agreement'

 class Aadhar extends React.Component {

  constructor(props){
    super(props);
    this.state={
      show :true,
    }
  }
 

handleClose = () => this.setState({show:false});
 
render(){
  return (
    <>
     <Agreement/>
          <Modal show={this.state.show} >
            <Modal.Header>
              <Modal.Title>Register Aadhar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Forms/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary"
              onClick={this.handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
      </>
      );
}
 
}

export default Aadhar