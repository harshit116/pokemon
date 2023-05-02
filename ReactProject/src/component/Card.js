import React, { Component } from "react";

export class Card extends Component {
  render() {
    let { title, type, imgUrl, hp, attack, defence, speed, about } = this.props;
    return (
      <div className="  my-3">
        <div className="card " style={{ width: "18rem" }} id="card">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" id="name">
              <strong>{title}</strong>
            </h5>
            <p className="card-text">
              Type: {type}, HP: {hp}, Attack: {attack}{" "}
            </p>
            <p>
              Defense: {defence}, Speed: {speed}
            </p>
            <a
              href={about}
              target="_blank"
              rel="noreferrer"
              className="btn btn -sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
