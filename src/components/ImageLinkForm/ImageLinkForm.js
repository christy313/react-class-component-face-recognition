import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
  return (
    <div className="tc">
      <p className="f3">{"Detect faces in your pictures"}</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            onChange={onInputChange}
            className="f4 pa2 w-70 center b--blue"
            type="text"
          />
          <button
            onClick={onImageSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-blue b--light-blue"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
