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
        validMail:true,
        isSignedIn: null
      }
    }
    componentDidMount() {
      window.gapi.load('client:auth2', () => {
        window.gapi.client
          .init({
            clientId:
              '643813969333-9n2qurt1dprqt85d9peivckp2lul5gjr.apps.googleusercontent.com',
            scope: 'email',
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.setState({ isSignedIn: this.auth.isSignedIn.get() });
            this.auth.isSignedIn.listen(this.onAuthChange);
          });
      });
    }

    onAuthChange = () => {
      this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };
  
    onSignIn = () => {
      this.auth.signIn();
    };
  
    onSignOut = () => {
      this.auth.signOut();
    };
  
    renderAuthButton() {
      if (this.state.isSignedIn === null) {
        return null;
      } else if (this.state.isSignedIn) {
        return (<>

          <button className="btn btn-google btn-block text-uppercase" onClick={this.onSignOut} ><i className="fab fa-google mr-2"></i> Sign Out</button>
          
              </>
        );
      } else {
        return (
            <>
          <button className="btn btn-google btn-block text-uppercase" onClick={this.onSignIn} ><i className="fab fa-google mr-2"></i> Sign in with Google</button>
        
          </>
        );
      }
    }

    
    
    render(){
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                <span style={{display:'block',textAlign: 'center'}}>salman@org.in uses Gmail?</span>
                <br/>
                  {this.renderAuthButton()}
                  <br/>
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
                    <label>By Continuing, I confirm to the <b>Terms and Service</b> and <b>Private Policy</b>of <a href="#/licence.html">Company</a></label>
                    </section>
                    
                  </div>
                  <br/>
                   <Link to="/currency">
                     <button className="btn btn-primary btn-block text-uppercase"
                      disabled={!this.state.isSignedIn}
                      >
                     Continue
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