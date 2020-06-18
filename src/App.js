import React, { Component } from 'react';
import Projects from './Projects';
import SocialMedia from './SocialMedia';
import profileImg from './assets/profile.jpeg'

class App extends Component {
  state = {
    displayBio: false
  };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio})
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <img src={profileImg} alt='profile-img' className="profile-img" />
        <p>My name is Ivane</p>
        <p>I am a software engineer.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>Extra info</p>
              <p>More info info</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Show more</button>
            </div>
          )
        }
        <hr />
        <Projects />

        <hr />
        <SocialMedia />
      </div>
    )
  }
}

export default App;
