import React, { Component } from 'react';
import Icon from './img/Icon.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <p>Chat</p>
        <div className="icon">
            <img src={Icon} alt="" />
        </div>
        <footer>
            <section className="box">
                <div className="content">
                        <label>Username</label>
                        <input type="text" />
                        <label>Password</label>
                        <input type="password" />
                </div>
                <button><i></i>Get Started</button>
            </section>
            <p>Not registered? <a href="/">Create Account</a></p>
        </footer>
    </main>
    );
  }
}

export default App;
