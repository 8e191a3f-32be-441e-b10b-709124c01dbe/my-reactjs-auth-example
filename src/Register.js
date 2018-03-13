import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstnamestate: '',
      secondnamestate: '',
      usernamestate: '',
      passwordstate: '',

      firstnameerrorstate: '',
      secondnameerrorstate: '',
      usernameerrorstate: '',
      passworderrorstate: '',
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeSecondName = this.handleChangeSecondName.bind(this);
    this.hadleChangeUsername = this.hadleChangeUsername.bind(this);
    this.handleChangepassword = this.handleChangepassword.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeFirstName(event) {
    this.setState({ firstnamestate: event.target.value })
  }

  handleChangeSecondName(event) {
    this.setState({ secondnamestate: event.target.value })
  }
  hadleChangeUsername(event) {
    this.setState({ usernamestate: event.target.value })
  }
  handleChangepassword(event) {
    this.setState({ passwordstate: event.target.value })
  }
  handleSubmit(event) {
    let errormessage = 'SHIT!';
    let erors = false;

      if (this.state.firstnamestate === ''){
        erors = true;
        this.setState({ firstnameerrorstate: errormessage })
      }
      else {
        this.setState({ firstnameerrorstate: '' })
      }

      if (this.state.secondnamestate === ''){
        erors = true;
        this.setState({ secondnameerrorstate: errormessage })
      }
      else {
        this.setState({ secondnameerrorstate: '' })
      }

      if (this.state.usernamestate === ''){
        erors = true;
        this.setState({ usernameerrorstate: errormessage })
      }
      else {
        this.setState({ usernameerrorstate: '' })
      }
      
      if (this.state.passwordstate === ''){
        erors = true;
        this.setState({ passworderrorstate: errormessage })
      }
      else {
        this.setState({ passworderrorstate: '' })
      }
      if (!erors){
        axios.post('http://localhost:5005/register', {
      
        username: this.state.usernamestate,
        password: this.state.passwordstate,
        firstname: this.state.firstnamestate,
        secondname: this.state.secondnamestate
      })
      .then(response => {
        // Check for erors and shot alert!
        // In curl is one, in web is other!
        alert(response.data.message)
      })
      }

  }

  render() {
    return (
      <div style={{width: 700}}>
      <Card>
        <center>
          <CardText>
            <center>
              <TextField
                hintText="Your firstname"
                onChange={this.handleChangeFirstName}
                errorText={this.state.firstnameerrorstate}
              /><br />
              <TextField
                hintText="Your secondname"
                onChange={this.handleChangeSecondName}
                errorText={this.state.secondnameerrorstate}
              /><br />
              <TextField
                hintText="Username"
                onChange={this.hadleChangeUsername}
                errorText={this.state.usernameerrorstate}
              /><br />
              <TextField
                hintText="Password"
                type="password"
                errorText={this.state.passworderrorstate}
                onChange={this.handleChangepassword}
              /><br />
              <FlatButton label="Register" onClick={this.handleSubmit} primary={true}/>
              <Link to={"/"}><FlatButton label="Login Page" /></Link>
            </center>
          </CardText>
        </center>
      </Card>
      </div>
    );
  }
}

export default Register;