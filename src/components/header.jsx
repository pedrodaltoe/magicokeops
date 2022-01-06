import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <div className="headerContainer">
                    <h1>
                      {this.props.data ? this.props.data.title : "Loading"}
                    </h1>
                    <p>
                      {this.props.data ? this.props.data.paragraph : "Loading"}
                    </p>
                    <a
                      href="https://www.youtube.com/channel/UCvb0cCczmpMzot4YzfCta9A"
                      className="btn btn-custom btn-lg page-scroll"
                    >
                      Youtube
                    </a>{" "}
                    <a
                      href="https://wa.me/5551994689680"
                      className="btn btn-custom btn-lg page-scroll"
                    >
                      WhatsApp
                    </a>{" "}
                    <a
                      href="https://wa.me/5551994689680"
                      className="btn btn-custom btn-lg page-scroll"
                    >
                      WhatsApp
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
