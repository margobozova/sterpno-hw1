import React from 'react';
import './styles.css';

const RepoParams = ({ currentRepo = {} }) => (
  <div >
    <div className="item">
      {currentRepo.name}
    </div>
    <div className="item">
      {currentRepo.id}
    </div>
    <div className="item">
      {currentRepo.language}
    </div>
  </div>
);

export default RepoParams;