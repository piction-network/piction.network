import React from 'react';
import ReactDOM from 'react-dom';

import Globe from '../static/globe.svg';
import Caret from '../static/caret.svg';

const Menu = () => (
  <div className="dropdown__menu">
    <a href="/">English</a>
    <a href="/ko">한국어</a>
    <a href="/cn">中文</a>
    <style jsx>{`
      .dropdown__menu {
        margin-top: 14px;
      }
      .dropdown__menu a {
        display: block;
        text-decoration: none;
        color: #000;
        padding: 10px 0;
      }
      .dropdown__menu a:hover {
        color: #999;
      }
    `}</style>
  </div>
)

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showMenu: false };
  }

  getInitialState() {
    return {
      showMenu: false
    }
  }

  toggle() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const menu = this.state.showMenu ? (
      <Menu />
    ) : (
      null
    )
    return(
      <div className="dropdown">
        <button className="dropdown__toggle" onClick={() => this.toggle()}>
          <span>{this.props.selected}</span>
          <span className="caret">
            <Caret />
          </span>
        </button>
        { menu }
        <style jsx>{`
        .dropdown {
          padding: 16px;
          min-width: 132px;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.08);
        }
        .caret {
          display: flex;
          align-items: center;
        }
        .dropdown__toggle {
          padding: 1px 0;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          appearance: none;
          background: none;
          border: none;
        }
        .dropdown__toggle:active,
        .dropdown__toggle:focus {
          color: #000;
          outline: 0;
          background: none;
          border: none;
        }
        @media (max-width: 768px) {
          .dropdown {
            min-width: 101px;
          }
        }
        @media (max-width: 640px) {
          .dropdown {
            min-width: 101px;
          }
        }
        `}</style>
      </div>
    )
  }
}

export default Dropdown
