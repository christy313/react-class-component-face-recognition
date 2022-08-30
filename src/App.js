import React, { Component } from "react";
import Clarifai from "clarifai";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

const app = new Clarifai.App({
  apiKey: "3261c928d20848b6a4b8674d822130a8",
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (e) => {
    console.log(e.target.value);
  };

  onButtonSubmit = () => {
    app.models
      .predict(
        "53e1df302c079b3db8a0a36033ed2d15",
        "https://imgs.search.brave.com/qXpEkNeP0l2xUrG9o30HeeWsdYPhZzf3TyNPwvRLh8Y/rs:fit:1200:750:1/g:ce/aHR0cHM6Ly8xNzM0/ODExMDUxLnJzYy5j/ZG43Ny5vcmcvZGF0/YS9pbWFnZXMvZnVs/bC8zNzE5MjUvZ29v/Z2xlLW1lZXQtaG93/LXRvLWNoYW5nZS1s/YXlvdXQtd2l0aC00/OS1wZXJzb24tZ3Jp/ZC12aWV3LmpwZw"
      )
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {}
      );
  };

  render() {
    return (
      <div>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition />
      </div>
    );
  }
}
