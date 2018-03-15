import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardText } from 'material-ui/Card';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';


class Register extends Component {

  constructor(props) {
    super(props);
    super(this.state);
    this.state = {
      usernamestate: '',
      passwordstate: '',

      usernameerrorstate: '',
      passworderrorstate: '',
      message: '',
    };
    this.hadleChangeUsername = this.hadleChangeUsername.bind(this);
    this.handleChangepassword = this.handleChangepassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hadleChangeUsername(event) {
    this.setState({ usernamestate: event.target.value })
  }
  handleChangepassword(event) {
    this.setState({ passwordstate: event.target.value })
  }
  handleSubmit(event) {
    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2) return parts.pop().split(";").shift();
    }
    //document.cookie = "userName=Vasya";
    //console.log(getCookie('userName'))
    let errormessage = 'Обязательно для заполнения!';
    let error = false;

    if (this.state.usernamestate === '') {
      error = true;
      this.setState({ usernameerrorstate: errormessage })
    }
    else {
      this.setState({ usernameerrorstate: '' })
    }

    if (this.state.passwordstate === '') {
      error = true;
      this.setState({ passworderrorstate: errormessage })
    }
    else {
      this.setState({ passworderrorstate: '' })
    }
    if (!error){
      axios.post('http://localhost:5005/login', {
      
        username: this.state.usernamestate,
        password: this.state.passwordstate
    
      
      })
      .then(response => {

        if (response.data.erros === 0){
          document.cookie = "document_key="+ response.data.sessionkey;
          window.location.href = "/welcome"
        }

        else{
          console.log(response.data.erros)
        }
      })
    }
  }

  render() {
    
    
    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2) return parts.pop().split(";").shift();
    }
    
    if (getCookie("document_key") === "ivaidkey"){
      if (getCookie("alerted") === false){
       document.cookie = "alerted=true";
       alert("your session is expired/invaid")
      }
    }

    return (
      <div style={{"padding": "15%"}}>
      <Card>
        <center>
          <CardText>
            {this.state.message}
            <center>
              <TextField
                hintText="Username"
                onChange={this.hadleChangeUsername}
                errorText={this.state.usernameerrorstate}
              /><br/>
              <TextField
                hintText="Password"
                type="password"
                errorText={this.state.passworderrorstate}
                onChange={this.handleChangepassword}
              /><br/>
              <FlatButton label="Login" type="submit" onClick={this.handleSubmit} primary={true} />
              <Link to={"/register"}><FlatButton label="Register Page" /></Link>
            </center>
          </CardText>
        </center>
      </Card>
      </div>
    );
  }
}

export default Register;