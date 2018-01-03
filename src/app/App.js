import React, { Component } from 'react';
import ReposList from '../reposList';
import RepoParams from '../repoParams';
import './App.css';

class App extends Component {
  state = {
    data: [],
    currentID: 0,
  };

  componentWillMount() {
    fetch('https://api.github.com/orgs/octokit/repos')
      .then(response => response.json())
      .then(response => this.setState({ data: response }))
      .catch(err => console.log(err, 'Oooops! You have error in the response'));
  }

  chooseRepo = (id) => {
    this.setState({ currentID: id });
  };

  render() {
    const { data } = this.state;
    const currentRepo = data.find(repo => repo.id === this.state.currentID);
    return (
      <div className="app">
        <ReposList data={data} chooseRepo={this.chooseRepo} />
        <RepoParams currentRepo={currentRepo} />
      </div>
    );
  }
}

export default App;
