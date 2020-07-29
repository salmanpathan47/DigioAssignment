import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from '../../src/aadhar.png'

class Forms extends React.Component {
    constructor(props){
      super(props);
        this.state = {
        fields: {},
        errors: {},
        otp:"",
        validMail:true
        }
    }

   handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    
    if(!fields["name"]){
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if(typeof fields["name"] !== "undefined"){
      if(!fields["name"].match(/^\d{12}(\d{2})?$/)){
        formIsValid = false;
        errors["name"] = "Please enter 12 digit";
      }      	
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation() && this.state.validMail === true){
        toast.success('Aadhar verified Successfully')
    }else{
        toast.error('Error in verifying your Aadhar')
    }

  }

  handleChange(field, e){    		
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }
  handleChangeSubmit=(e)=>{
    this.setState({otp: e.target.value})
      if(e.target.value.match(/^\d{6}(\d{2})?$/)){
        this.setState({validMail: true});
      } else 
          this.setState({validMail: false});
  }

  render(){
    return (
      <div>  
          <ToastContainer  position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover  
           />      	
        <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
            <div className="col-md-2">
            <img src={image} alt="image" style={{width: '67px'}} />
            </div>
          <div className="col-md-12">
            <fieldset>
              <input ref="name" type="text" size="30" 
              onChange={this.handleChange.bind(this, "name")} 
              value={this.state.fields["name"]} />
              <span className="error">{this.state.errors["name"]}</span>
              <button className="btn pro" id="submit" value="Submit" style={{width: '17%'}}>Verify</button>
              <br/>
              <br/>
              <input type="checkbox" name="checkbox" value="value"/>
              <label>I agree to eSign this <a href="">KYC document</a> to get started</label>
              <br/>
              <input  type="text" size="15"  
               onChange={this.handleChangeSubmit} 
               value={this.state.otp}
               style={{marginLeft: '6.8rem'}}
              />
              <button className="btn pro" id="submit" value="Submit">Submit</button>
              <br/>
              <br/>
            </fieldset>
          </div>
          <div className="col-md-12">
          </div>
        </form>
      </div>
    )
  }
}

export default Forms