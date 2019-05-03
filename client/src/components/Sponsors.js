import React, { Component } from 'react';
import wes from '../assets/wes-bos.jpg';
import infotech from '../assets/infotech.svg';

class Sponsors extends Component {
  render() {
    return (
      <div className="shoutout">
        <div className="shoutout-container">
          <div className="mission">
            <h2 className="small">Our Mission</h2>
            <p>
              Dev London is your opportunity to gain insights and inspiration by
              networking with influential software professionals.
            </p>
          </div>
          <div className="sponsors">
            <div className="current">
              <h1>Current Sponsors</h1>
              <p>
                This group is made possible by the generosity of our monthly
                sponsors.
              </p>
              <div className="sponsors-gallery">
                <a
                  href="https://www.infotech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-logo grow shadow"
                >
                  <img
                    src={infotech}
                    className="full-width"
                    alt="Info Tech Research Group logo"
                  />
                </a>
                <a
                  href="https://wesbos.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-logo grow shadow wes"
                >
                  <img src={wes} alt="Wes Bos logo" />
                </a>
              </div>
            </div>
            <div className="past">
              <h2>Past Sponsors</h2>
              <ul className="sponsors-list">
                <li className="sponsor-list-item">
                  <a
                    href="http://ztr.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZTR
                  </a>{' '}
                  (venue sponsor)
                </li>
                <li className="sponsor-list-item">
                  <a
                    href="https://vehikl.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vehikl
                  </a>{' '}
                  (venue sponsor, Meetup sponsor)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
