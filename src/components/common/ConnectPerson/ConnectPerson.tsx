import React from 'react';
import './ConnectPerson.scss';

const ConnectPerson: React.FC = () => {
  return (
    <div className="connect-person">
      <div className="connect-person-image">
        <img alt={"Avatar"} />
      </div>
      <div className="connect-person-content">
        <span className="connect-person-content__fullName">ArtyomTsymbal1</span>
        <span className="connect-person-content__username">@TsymbalArtyom1</span>
        <span className="connect-person-content__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ab atque magnam quasam?
        </span>
      </div>
      <button className="connect-person-button">Follow</button>
    </div>
  );
};

export default ConnectPerson;
