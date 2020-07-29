import React from 'react';

//link from route
import {Link} from "react-router-dom"
//import css
import './login.css'
export default class Login extends React.Component{
    //const history=useHistory();
    constructor(props){
      super(props);
  
      this.state = {
        email: '',
        validMail:true
      }
    }
    handleChange=(e)=>{
      this.setState({email: e.target.value})
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
      if(e.target.value.match(pattern)){
        this.setState({validMail: false});
    }else 
       this.setState({validMail: true});
    }
    
    render(){
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                <span style={{display:'block',textAlign: 'center'}}>sanketh@digio.in uses Gmail?</span>
                <br/>
                  <span style={{display:'block',textAlign: 'center'}}>login using Gmail</span>
                  <br/>
                <button className="btn btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                <h5><span>OR</span></h5>
                <form className="form-signin">
                <label>Proceed with your Email Address</label>
                  <div className="form-label-group">
                    <input refs="email" type="email"  
                    value={this.state.email} className="form-control"   
                    onChange={this.handleChange}  
                    />
                    <section style={{display:'flex'}}>
                    <input  type="checkbox" name="checkbox" value="value"/>
                    <label>By Continuing, I confirm to the <b>Terms and Service</b> and <b>Private Policy</b>of <a href="#/licence.html">Diego.in</a></label>
                    </section>
                    
                  </div>
                  <br/>
                   <Link to="/aadhar">
                     <button className="btn btn-primary btn-block text-uppercase"
                      disabled={this.state.validMail}
                      >
                     Continue{this.state.validMail}
                     </button>
                    </Link>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        )

    }
  
}