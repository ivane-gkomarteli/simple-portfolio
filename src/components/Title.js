import React, { Component } from 'react';

const TITLES = [
  'a software engineer',
  'a music lover',
  'an enthusiastic learner',
  'an adventure seeker'
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.animateTitles();
  };

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearInterval(this.fadeInInterval);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex })
    }, 4000)

    this.fadeInInterval = setInterval(() => {
      this.setState({ fadeIn: !this.state.fadeIn })
    }, 2000)
  }

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[titleIndex]

    return (
      <div className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</div>
    )
  }
}

export default Title;
