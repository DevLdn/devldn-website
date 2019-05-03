import React, { Component } from 'react';
import streamline from '../assets/streamline.gif';
import wrkhub from '../assets/wrkhub-logo.png';

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
          <div className="sponsors shadow">
            <div className="current">
              <h1>Current Sponsors</h1>
              <p className="thanks">
                This group is made possible by the generosity of our monthly
                sponsors.
              </p>
              <div className="sponsors-gallery">
                <a
                  href="https://wrkhub.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-logo grow shadow"
                >
                  <img src={wrkhub} className="full-width" alt="Wrkhub logo" />
                </a>
                <a
                  href="https://streamlineicons.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-logo grow shadow"
                >
                  <img
                    src={streamline}
                    className="full-width"
                    alt="Streamline Icons logo"
                  />
                </a>
              </div>
            </div>
            <div className="past">
              <h2>Past Sponsors</h2>
              <ul className="sponsors-list">
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
                    href="https://wesbos.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Info Tech
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
