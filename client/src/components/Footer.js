import React, { Component } from 'react';
import { ReactComponent as DevName } from '../assets/dev-london-name.svg';
import twitter from '../assets/twitter.svg';
import slack from '../assets/Slack_Mark.svg';
import meetup from '../assets/meetup-logo.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <DevName className="name" />
        <div className="footer-content">
          <div className="contact">
            <h3>Join the community</h3>
            <a
              href="https://twitter.com/dev_ldn"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <img src={twitter} alt="Twitter logo" />
            </a>
            <a href="#top" className="social">
              <img src={slack} alt="Slack logo" className="padded" />
            </a>
            <a
              href="https://www.meetup.com/Dev-London/"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              <img src={meetup} alt="Meetup logo" className="padded" />
            </a>
          </div>
          <p>
            Looking for the next step in your career? Check out{' '}
            <a
              href="https://www.ledc.com/tech-jobs"
              target="_blank"
              rel="noopener noreferrer"
            >
              LEDC's job board
            </a>{' '}
            for the latest tech jobs in London.
          </p>
          <p>
            Keep in touch and we look forward to seeing you at the next Dev
            London event!
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
