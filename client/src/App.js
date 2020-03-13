import React from 'react';
import axios from 'axios';
import Card from './component/Card'
import './App.css';
import { useForm } from './component/hooks/useForm.js';
import SignUpForm from './component/SignUpForm'

class App extends React.Component {
  state = {
    players: [],
  };

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res);
      console.log('hello');
      this.setState({
        players: res.data
      });
    })
    .catch(err => console.log(err))
  }

  // handleChanges = e => {
  //   this.setState({
  //     text: e.target.value
  //   });
  // };

  render() {
    return (
      <div>
        <div className='title'>
          <h1>Players</h1>
        </div>
        <SignUpForm />
        <Card users={this.state.players} />
      </div>
    );
  }
}

export default App;

