import React, { Component } from 'react';
import { ReactComponent as DevName } from '../assets/dev-london-name.svg';
import slack from '../assets/Slack_Mark.svg';
import meetup from '../assets/meetup.png';

const apiURL = process.env.REACT_APP_API_URL || '';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      button: true,
      email: '',
      error: null,
      isLoading: false,
      success: null
    };
  }

  morphForm() {
    this.setState({ button: !this.state.button });
  }

  handleSubmit = () => {
    if (!this.state.email) {
      this.setState({ error: 'Uh oh!' });
      return;
    }

    this.setState({ error: null, isLoading: false });
    let _this = this;
    fetch(`${apiURL}/invite`, {
      method: 'post',
      body: JSON.stringify({ email: this.state.email }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        if (!data.ok) {
          throw Error(data.error);
        }

        this.setState(
          {
            error: null,
            isLoading: false,
            email: '',
            button: !_this.state.button,
            success: true
          },
          () => setInterval(() => this.setState({ success: null }), 5000)
        );
      })
      .catch(error => {
        console.log(error);
        if (error.message && error.message === 'already_in_team') {
          error.message = "Looks like you're already in our Slack team!";
        }
        if (error.message && error.message === 'already_invited') {
          error.message = "We've already sent you an invite. Check your email!";
        }

        this.setState({ error, isLoading: false, success: false });
      });
  };

  hasErrorMessage = () => {
    return this.state.error && this.state.error.message;
  };

  render() {
    let slack_class = this.state.button ? 'shrink' : 'explode';

    return (
      <header>
        <div className="handshake">
          <div className="headline">
            <DevName className="name" />
            <h2>Bringing tech together in the Forest City</h2>
          </div>
        </div>
        <div className="action-container">
          <div className={`call-to-action slack grow shadow ${slack_class}`}>
            <img
              src={slack}
              className="slack-img left shadow"
              alt="Slack logo"
            />
            <span className="content">
              <span onClick={() => this.morphForm()}>Join our Slack</span>
              <div className="form">
                <input
                  type="text"
                  name="email"
                  placeholder="email address"
                  onChange={e =>
                    this.setState({ [e.target.name]: e.target.value })
                  }
                />
                <button
                  className="bg-2 shadow"
                  onClick={() => this.handleSubmit()}
                >
                  Request Invite
                </button>
              </div>
            </span>
            <div className="response">
              {this.state.success ? (
                <p className="success">Invite sent! Check your email!</p>
              ) : null}
              {this.hasErrorMessage() ? (
                <p className="error">{this.state.error.message}</p>
              ) : null}
            </div>
          </div>
          <a
            className="call-to-action meetup grow shadow"
            href="https://www.meetup.com/Dev-London/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={meetup}
              className="meetup-img right shadow"
              alt="Meetup logo"
            />
            Come to an event
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
