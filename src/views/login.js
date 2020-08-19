import React from "react";
import axios from "axios"


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import './../assets/css/login.css'
import friends from "./../assets/img/friends.png"
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', token: '' };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  componentDidMount(){

  }
  handleChange(event) {
    if (event.target.name === 'email') this.setState({ email: event.target.value });
    else this.setState({ password: event.target.value });
    console.log(event.target.value)
  }
  handleSubmit(){
    let BaseURL = 'http://localhost:3001/api/Users/';
    const qs = require('querystring');
    try {
      const requestBody = { email: this.state.email, password: this.state.password };
      const config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios.post
        (BaseURL + `login`,
          qs.stringify(requestBody),
          config).then(res => {
            console.log(res.data)
          });
        }
          catch (e) {
            console.log(`:cri: Axios request failed: ${e}`);
          }

  }

  render() {
    return (
      <>
        <div id="login"style={{ overflowX: "hidden" }}>
          <div className="header">
            <span style={{ fontSize: '45px', paddingLeft: "2%", color: 'white', top: '3.5%' }}> <b> WordBook</b> </span>
            <span style={{ position: 'absolute', right: '480px', color: 'white', top: '2%', fontSize: '12px', fontFamily: 'Helvetica, Arial, sans-serif' }}>Email or Phone </span>
            <span style={{ position: 'absolute', right: '345px', color: 'white', top: '2%', fontSize: '12px', fontFamily: 'Helvetica, Arial, sans-serif' }} >Password </span>
            <div style={{ position: 'absolute', right: '175px', top: '25%' }}>
              <input type="text" style={{ width: '150px', height: '22px', border: '0.5px solid black' }}  name="email" onChange={this.handleChange}/>&emsp;	
              <input type="password" style={{ width: '150px', height: '22px', border: '0.5px solid black' }} name="password" onChange={this.handleChange}/>&emsp;	
              <button style={{ backgroundColor: '#EE2E36',  color: 'white', border: '1px solid black', borderRadius: '2px' }} onClick={this.handleSubmit}> <b>Log In</b></button><br />
              <a href="#" style={{ color: 'white', textDecoration: 'none', position: 'relative', left: '175px' }}>forgotten passoword?</a>
            </div>
          </div>
          <div className="left">
            <span style={{ color: 'rgb(14, 56, 95)', fontSize: '20px', fontWeight: 700, width: '300px', wordSpacing: -1, display: 'block', position: 'relative', left: '200px', margin: '2%' }}>WORDBOOK helps you connect and share with the people in your life.</span>
            <img className="image" src={friends} />
            <div style={{ display: "blockinline" }}>
              <CardBody>
                <Col md="12" style={{ display: "flex" }}>
                  <Col md="4">
                    <span onClick={(event) =>this.props.history.push("/EducBook")} style={{cursor:"pointer"}} >EducBook</span>
                  </Col>
                  <Col md="4">
                    <span onClick={(event) =>this.props.history.push("/GoodWayBook")} style={{cursor:"pointer"}}>GoodWayBook</span>
                  </Col>
                  <Col md="4">
                    <span onClick={(event) =>this.props.history.push("/FoodBook")} style={{cursor:"pointer"}}>FoodBook</span>
                  </Col>

                </Col>
                <Col md="12" style={{ display: "flex"}}>
                  <Col md="4">
                    <span  onClick={(event) =>this.props.history.push("/HealthBook")} style={{cursor:"pointer"}}>HealthBook</span>
                  </Col>
                  <Col md="4">
                    <span  onClick={(event) =>this.props.history.push("/")} style={{cursor:"pointer"}}>FaceBook</span>
                  </Col>
                  <Col md="4">
                    <span  onClick={(event) =>this.props.history.push("/LowBook")} style={{cursor:"pointer"}}>LowBook</span>
                  </Col>
                </Col>
                <Col md="12">
                  <Col md="4">
                    <span  onClick={(event) =>this.props.history.push("/KidsBook")} style={{cursor:"pointer"}}>KidsBook</span>
                  </Col>
                </Col>

              </CardBody>
            </div>
          </div>
          <div className="right">
            <span style={{ color: '#333', fontSize: '36px', fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700 }}>Create an account</span><br /><br />
            <span style={{ color: '#1d2129', fontSize: '19px', fontFamily: 'Helvetica, Arial, sans-serif' }}>It's free and always will be.</span>	<br /><br />
            <input className="registration_form" type="text" placeholder="First Name" style={{ width: '180px' }} />
            <input className="registration_form" type="text" placeholder="Last Name" style={{ width: '180px' }} />
            <input className="registration_form" type="text" placeholder="Mobile number or email address" style={{ width: '377px' }} />
            <input className="registration_form" type="text" placeholder="New Password" style={{ width: '377px' }} /><br /><br />
            <span style={{ color: '#1d2129', fontSize: '19px', fontFamily: 'Helvetica, Arial, sans-serif' }}>Birthday</span><br />
            <select>
              <option>1</option>
              <option>2</option>
              {/*more options will be here*/}
            </select>
            <select>
              <option>Jan</option>
              <option>feb</option>
              {/*more options will be here*/}
            </select>
            <select>
              <option>2000</option>
              <option>2001</option>
              {/*more options will be here*/}
            </select>
            <a id="birthday_help" href="#">why i need to provide my birthday?</a><br /><br />
            <input type="radio" /><label className="gender">Male</label>
            <input type="radio" /><label className="gender">Female</label><br />
            <p className="terms_and_conditions">
              By clicking Create an account, you agree to our Terms and confirm that you have read our Data Policy, including our cokiee
              Policy. You may receive SMS message notifications from Facebook and can opt out at any time.
          </p><br />
            <button id="submit">Create an account</button><br />
            <span style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: 'rgb(102, 102, 102)', fontSize: '13px' }}><a href="#">Create a Page</a> for a celebrity, band or business. </span>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
