import React from "react";
import "./css/cart.css";
import { Link } from "react-router-dom";

export default function BookCart({ book }) {
  return (
    <Link to='/details'>
      <div className="h-">
        &lt;&gt;
        <div className="card-container ">
          <a href="/" className="hero-image-container">
            <img
              className="hero-image h-60 mb-0"
              src="https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg"
              alt="Spinning glass cube"
            />
          </a>
          <main className="main-content mt-[-10px]">
            <h1>
              <a href="#">{book.title}</a>
            </h1>
            <div className="flex-row mt-[-20px]">
              <div className="coin-base">
                <img
                  src="https://i.postimg.cc/T1F1K0bW/Ethereum.png"
                  alt="Ethereum"
                  className="small-image"
                />
                <h2>{book.genre}</h2>
              </div>
              <div className="time-left">
                <img
                  src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png"
                  alt="clock"
                  className="small-image"
                />
                <p>3 days left</p>
              </div>
            </div>
          </main>
          <div className="card-attribute">
            <img
              src="https://i.postimg.cc/SQBzNQf1/image-avatar.png"
              alt="avatar"
              className="small-avatar"
            />
            <p>
              Written By{" "}
              <span>
                <a href="#">{book.author}</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
