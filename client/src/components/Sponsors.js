import React, { Component } from 'react';
import vehikl from '../assets/vehikl-square.jpg';
import infotech from '../assets/info-tech.png';
import mobials from '../assets/mobials.png';

class Sponsors extends Component {
  render() {
    return (
      <div className="shoutout">
        <div className="shoutout-container">
          <div className="mission">
            <h2 className="small">Our Mission</h2>
            <p>
              Dev London is here to provide insights and inspiration through
              leadership and networking with the local tech community.
            </p>
          </div>
          <div className="sponsors shadow">
            <div className="current">
              <h1>Current Sponsors</h1>
              <p className="thanks">
                This group is made possible by the generosity of our monthly
                sponsors.
              </p>
              <div className="sponsors-gallery">
                <a
                  href="https://vehikl.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-logo grow shadow"
                >
                  <img src={vehikl} className="full-width" alt="Vehikl logo" />
                </a>
                <a
                  href="https://www.infotech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-logo grow shadow"
                >
                  <img
                    src={infotech}
                    className="full-width"
                    alt="Info-Tech logo"
                  />
                </a>
              </div>
            </div>
            <div className="past">
              <h2>Past Sponsors</h2>
              <ul className="sponsors-list">
                <li className="sponsor-list-item">
                  <a
                    href="https://mobials.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mobials Inc.
                  </a>{' '}
                  (venue sponsor)
                </li>
                <li className="sponsor-list-item">
                  <a
                    href="https://streamlineicons.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Streamline Icons
                  </a>{' '}
                  (giveaway sponsor)
                </li>
                <li className="sponsor-list-item">
                  <a
                    href="https://wrkhub.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WrkHub
                  </a>{' '}
                  (venue sponsor)
                </li>
                <li className="sponsor-list-item">
                  <a
                    href="https://wesbos.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wes Bos
                  </a>{' '}
                  (giveaway sponsor)
                </li>
                <li className="sponsor-list-item">
                  <a
                    href="http://reddingdesigns.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Redding Designs
                  </a>{' '}
                  (refreshments sponsor)
                </li>
                <li className="sponsor-list-item">
                  <a
                    href="https://thearcane.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Arcane
                  </a>{' '}
                  (venue sponsor)
                </li>
                <li className="sponsor-list-item">
                  <a
                    href="https://www.infotech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Info-Tech
                  </a>{' '}
                  (venue sponsor)
                </li>
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
