import React from 'react';
import './styles.css';

const ReposList = ({ data, chooseRepo }) => (
  <div className="list">
    {data.map(repo => (
      <div key={repo.id} onClick={() => chooseRepo(repo.id)} >
        {repo.name}
      </div>
    ))}
  </div>
);

export default ReposList;