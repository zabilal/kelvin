import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

export const TextContainer = ({ users }) => (
  <div className="textContainer">
    {/* <div>
      <h1>
        Crush Chat 
        <br />
      </h1>
      <h2></h2>
    </div> */}
    {users ? (
      <div>
        <h3>Users chatting</h3>
        <div className="activeContainer">
          <h4>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h4>
        </div>
      </div>
    ) : null}
  </div>
);
